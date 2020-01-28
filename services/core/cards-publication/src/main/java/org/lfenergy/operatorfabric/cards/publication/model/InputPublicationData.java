
package org.lfenergy.operatorfabric.cards.publication.model;

import lombok.*;
import org.lfenergy.operatorfabric.cards.model.InputEnum;

import javax.validation.constraints.NotNull;
import java.util.List;

/**
 * <p>Please use builder to instantiate</p>
 *
 * <p>Input Model, documented at {@link Input}</p>
 *
 * {@inheritDoc}
 *
 * @author David Binder
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class InputPublicationData implements Input {
    @NotNull
    private InputEnum type;
    @NotNull
    private String name;
    @NotNull
    private I18n label;
    private String value;
    private Boolean mandatory;
    private Integer maxLength;
    private Integer rows;
    @Singular private List< ? extends ParameterListItem> values;
    @Singular private List<String> selectedValues;
    @Singular private List<String> unSelectedValues;
}
