const Enum_Rol = {
  ADMINISTRADOR: 'Administrador',
  LIDER: 'Líder',
  ESTUDIANTE: 'Estudiante',
};

const Enum_EstadoUsuario = {
  PENDIENTE: 'Pendiente',
  AUTORIZADO: 'Autorizado',
  NO_AUTORIZADO: 'No autorizado',
};

const Enum_EstadoProyecto = {
  ACTIVO: 'Activo',
  INACTIVO: 'Inactivo',
};

const Enum_FaseProyecto = {
  INICIADO: 'Iniciado',
  DESARROLLO: 'Desarrollado',
  TERMINADO: 'Terminado',
};

const Enum_TipoObjetivo = {
  GENERAL: 'General',
  ESPECIFICO: 'Específico',
};

const Enum_EstadoInscripcion = {
  ACEPTADO: 'Aceptado',
  RECHAZADO: 'Rechazado',
  PENDIENTE: 'Pendiente'
};

export { Enum_Rol, Enum_EstadoUsuario, Enum_EstadoProyecto, Enum_FaseProyecto, Enum_TipoObjetivo, Enum_EstadoInscripcion };
