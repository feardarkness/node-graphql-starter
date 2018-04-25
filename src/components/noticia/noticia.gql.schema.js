module.exports = `
  # Objeto noticia
  type Noticia {
    id: ID!
    titulo: String!
    resumen: String!
    contenido: String!
    estado: String!
    fechaPublicacion: String
    fechaActualizacion: String
  }

  # Modificar Noticia
  input ModificarNoticia {
    titulo: String
    resumen: String
    contenido: String
    estado: String
  }

  # Eliminar Noticia
  input EliminarNoticia {
    _id: ID!
  }

  type NoticiaQuery {
    obtenerNoticia(id: Int!): Noticia!
    obtenerNoticias: [Noticia]!
  }
`;
