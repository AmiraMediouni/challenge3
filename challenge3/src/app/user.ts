export class User {
    constructor(public nom:string,
        public email:string,
        public type_carte : string,
        public num_carte : string,
        public date_expiration : string,
        public code: number
        ){}
}
