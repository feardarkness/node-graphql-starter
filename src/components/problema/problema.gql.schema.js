module.exports = `
  # Objeto problema
  type Problema {
    id: ID!
    titulo: String!
    detalle: String!
    seguimiento: [Seguimiento]!
    fecha: String!
    estado: String!
  }

  type Seguimiento {
    descripcion: String!
    fecha: String!
  }

  type ProblemaQuery {
    obtenerProblema(id: ID!): Problema!
    obtenerProblemas: [Problema]!
    obtenerSeguimiento(id: ID!): Seguimiento
  }
`;
