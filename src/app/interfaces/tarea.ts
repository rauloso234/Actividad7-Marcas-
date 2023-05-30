export interface Tarea {

    titulo: String,
    descripcion: String,
    fecha: {
        minutos: number
        hora: number,
        Dia: number,
        Mes: number,
        Ano: number
    },
    estado: String
}