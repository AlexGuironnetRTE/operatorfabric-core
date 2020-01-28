/* Copyright (c) 2020, RTE (http://www.rte-france.com)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */


package org.lfenergy.operatorfabric.springtools.configuration.mongo;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import java.util.List;

/**
 * Property object to gather OperatorFabric specific mongo properties
 * @author David Binder
 */
@Configuration
@ConfigurationProperties("spring.data.mongodb")
@Data
public class OperatorFabricMongoProperties {
    private List<String> uris;
    private String database;
}
