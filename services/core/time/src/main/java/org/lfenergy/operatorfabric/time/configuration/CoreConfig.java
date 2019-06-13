/* Copyright (c) 2018, RTE (http://www.rte-france.com)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

package org.lfenergy.operatorfabric.time.configuration;

import lombok.extern.slf4j.Slf4j;
import org.lfenergy.operatorfabric.utilities.VirtualTime;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Business configuration for time module
 */
@Slf4j
@Configuration
public class CoreConfig {

    /**
     * Instantiate the virtual time singleton
     * @return virtual time singleton
     */
    @Bean
    public VirtualTime virtualTime(){
        return VirtualTime.getInstance();
    }
}
