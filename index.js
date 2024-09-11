function validateForm() {
    const mobile = document.getElementById('mobile').value;
    const mobilePattern = /^[0-9]{10}$/;
    
    if (!mobilePattern.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number");
        return false;
    }
    
    return true;
}
