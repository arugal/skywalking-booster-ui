/**
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export const Services = {
  variable: "$layer: String!",
  query: `
  services: listServices(layer: $layer) {
    id
    value: name
      label: name
      group
      layers
      normal
  }
  `,
};
export const Layers = {
  query: `
    layers: listLayers
  `,
};
export const Instances = {
  variable: "$serviceId: ID!, $duration: Duration!",
  query: `
  pods: listInstances(duration: $duration, serviceId: $serviceId) {
     id
     value: name
      label: name
      language
      instanceUUID
      layer
      attributes {
        name
        value
      }
    }
  `,
};
export const Endpoints = {
  variable: "$serviceId: ID!, $keyword: String!",
  query: `
  pods: findEndpoint(serviceId: $serviceId, keyword: $keyword, limit: 100) {
    id
    value: name
     label: name
    }
`,
};

export const getService = {
  variable: "$serviceId: String!",
  query: `
  service: getService(serviceId: $serviceId) {
    id
    value: name
      label: name
      group
      layers
      normal
  }
  `,
};

export const getInstance = {
  variable: "$instanceId: String!",
  query: `
  instance: getInstance(instanceId: $instanceId) {
    id
     value: name
      label: name
      language
      instanceUUID
      layer
      attributes {
        name
        value
      }
    }
  `,
};

export const getEndpoint = {
  variable: "$endpointId: ID!",
  query: `
  endpoint: getEndpointInfo(endpointId: $endpointId) {
    id
     value: name
      label: name
      serviceId
      serviceName
  }
  `,
};
