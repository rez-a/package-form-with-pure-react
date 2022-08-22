export const setBg = pathName => {
    pathName === '/' ?
        document.body.style.backgroundColor = '#CED4DA' :
        document.body.style.backgroundColor = '#111418';
}