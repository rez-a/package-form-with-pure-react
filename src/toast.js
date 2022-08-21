import toast from 'react-hot-toast';

export const showToast = (text, status) => {
    if (status === 'success') {
        toast.success(text,
            {
                style: {
                    background: '#35404b',
                    color: '#fff',
                },
                position: "top-right"
            })
    } else {
        toast.error(text,
            {
                style: {
                    background: '#35404b',
                    color: '#fff',
                },
                position: "top-right"
            })
    }
}