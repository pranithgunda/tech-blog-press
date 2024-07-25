// return date in format mm/dd/yyyy
module.exports = {
    format_timestamp: (date) => {
        const createdDate = new Date(date);
        return createdDate.toLocaleDateString('en-US');
    }
};