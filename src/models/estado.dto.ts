export interface EstadoDTO {
  id : string;
  nome : string;
  estado? : EstadoDTO;//? é um campo opcional
}
