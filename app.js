let customersArr = [{
    firstName: 'John',
    lastName: 'Smith',
    email: 'S@yahoo.com'
}, {
    firstName: 'Samuel',
    lastName: 'Clemens',
    email: 'S@gmail.com'
}, {
    firstName: 'Ricky',
    lastName: 'Bobby',
    email: 'RB@live.com'
}, {
    firstName: 'Neo',
    lastName: 'Anderson',
    email: '000@msn.com'
}, {
    firstName: 'Jane',
    lastName: 'Doe',
    email: '007@bing.com'
}, {
    firstName: 'John',
    lastName: 'Mayer',
    email: 'strat@prs.com'
}, {
    firstName: 'Bob',
    lastName: 'Weir',
    email: 'the@dead.com'
}]
function drawCustomers(arr) {
    let template = `
    <tr>
        <th>last name</th>
        <th>first name</th>
        <th>email</th>
    </tr>
    `
    let elem = document.getElementById('customers')

    for (let i = 0; i < arr.length; i++) {
        let customer = arr[i];
        template += `
        <tr>
            <td>${customer.lastName}</td>
            <td>${customer.firstName}</td>
            <td>${customer.email}</td>
        </tr>
        `
    }
    elem.innerHTML = template
}
drawCustomers(customersArr)