export enum NotificationType {
    SUCCESS = 'success',
    ERROR = 'error'
}

export type ServerResponse<T> = {
    status: 'success'|'error';
    message: string;
    data: T;
}
