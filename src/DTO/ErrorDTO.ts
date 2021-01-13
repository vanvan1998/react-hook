class ErrorDTO {
    message: string;

    constructor(errorDTO: ErrorDTO) {
        this.message = errorDTO.message;
    }

    toJSON() {
        return {
            message: this.message
        }
    }
}

export default ErrorDTO 