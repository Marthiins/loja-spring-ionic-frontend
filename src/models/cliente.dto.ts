export interface ClienteDTO { //Mesmo dados do cliente DTO do backAnd
  id : string;
  nome : string;
  email : string;
  imageUrl? : string;//? por ser tratar de um atributo opcional
}
