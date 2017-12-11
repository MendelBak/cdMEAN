export class User {
    constructor(
        public id: number = null,
        public first_name: string = '',
        public last_name: string = '',
        public email: string = '',
        public password: string = '',
        public created_at: Date = new Date(),
        public update_at: Date = new Date()
    ) {}
}
