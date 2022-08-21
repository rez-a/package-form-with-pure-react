export const validation = (data, pathName) => {
    const error = {};
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

    if (pathName === '/register') {
        if (!data.Full_Name) {
            error.Full_Name = 'Full Name is required';
        } else if (!userNameRegex.test(data.Full_Name)) {
            error.Full_Name = 'Full Name is invalid';
        } else {
            delete error.Full_Name;
        }


        if (!data.Email_Address) {
            error.Email_Address = 'Email Address is required';
        } else if (!emailRegex.test(data.Email_Address)) {
            error.Email_Address = 'Email Address is invalid';
        } else {
            delete error.Email_Address
        }


        if (!data.Password) {
            error.Password = 'Password is required';
        } else if (data.Password.length < 6) {
            error.Password = 'Password must be more than 6 characters';
        } else {
            delete error.Password
        }


        if (!data.Confirm_Password) {
            error.Confirm_Password = 'Confirm your password';
        } else if (data.Password !== data.Confirm_Password) {
            error.Confirm_Password = 'This value does not match the password';
        } else {
            delete error.Confirm_Password
        }

        if (!data.Rules) {
            error.Rules = 'You must accept the rules and regulations';
        } else {
            delete error.Rules;
        }
    } else if (pathName === '/login') {

        if (!data.Email_Address) {
            error.Email_Address = 'Email Address is required';
        } else if (!emailRegex.test(data.Email_Address)) {
            error.Email_Address = 'Email Address is invalid';
        } else {
            delete error.Email_Address
        }


        if (!data.Password) {
            error.Password = 'Password is required';
        } else if (data.Password.length < 6) {
            error.Password = 'Password must be more than 6 characters';
        } else {
            delete error.Password
        }
    } else if (pathName === '/forgetPassword') {
        if (!data.Email_Address_Or_Phone) {
            error.Email_Address_Or_Phone = 'Email Address or Phone Number is required';
        } else {
            delete error.Email_Address_Or_Phone
        }
    }



    return error;

}