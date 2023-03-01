const stringLength = (string) => {
    if(string.length === 0 || string.length > 10) {
        return 'Not valid string';
    } else return string.length;
};

module.exports = stringLength;
