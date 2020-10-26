package org.lfenergy.operatorfabric.autoconfigure.kafka;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.lfenergy.operatorfabric.avro.CardCommand;
import org.lfenergy.operatorfabric.cards.publication.kafka.consumer.SchemaRegistryProperties;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.test.context.ActiveProfiles;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
@ActiveProfiles(profiles = {"native", "test"})
class ConsumerFactoryAutoConfigurationShould {

    @Mock
    private KafkaProperties kafkaProperties;

    @Mock
    private SchemaRegistryProperties schemaRegistryProperties;

    @InjectMocks
    private ConsumerFactoryAutoConfiguration cut;

    private Map<String,Object> props = new HashMap<>();

    @Test
    void testConsumerFactoryWithoutSchemaRegistry() {
        when(kafkaProperties.getBootstrapServers()).thenReturn(new ArrayList<>());
        when(kafkaProperties.buildConsumerProperties()).thenReturn(props);
        when(schemaRegistryProperties.getUrl()).thenReturn(null);

        ConsumerFactory<String, CardCommand > result = cut.consumerFactory(schemaRegistryProperties);
        assertNotNull(result);
        verify(schemaRegistryProperties, times(1)).getUrl();
    }

    @Test
    void testConsumerFactoryWithSchemaRegistry() {
        when(kafkaProperties.getBootstrapServers()).thenReturn(new ArrayList<>());
        when(kafkaProperties.buildConsumerProperties()).thenReturn(props);
        when(schemaRegistryProperties.getUrl()).thenReturn("Url of Registry");
        ConsumerFactory<String, CardCommand > result = cut.consumerFactory(schemaRegistryProperties);


        assertNotNull(result);
        verify(schemaRegistryProperties, times(3)).getUrl();
    }
}
