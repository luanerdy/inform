export type ToastType = 'success' | 'error' | 'warning' | 'info'

export     interface IToast {
    title: string
    type: ToastType
    text: string
}
