'use strict';


$( () => {

    const USER_LIST_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users';

    const $userList = $('#users');
    const $userName = $('#name')
    const $userSurname = $('#surname')
    const $userPhone = $('#phone')
    const $userEmail = $('#email')

    $userList.on('click', '.deleteUser', removeUser);


    getData();

    function getData() {
        fetch(USER_LIST_URL)
        .then(function (res) {
            return res.json();
        })
        .then(function(data) {
            setData(data);
        });
    }
    
    function setData(dataArr) {
        dataArr.forEach(generateHtml);
    }

    function generateHtml(dataObj) {

        const user = `<thead class="titles" data-user-id ="${dataObj.id}">
                        <tr class="ui-widget-header ">
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th><div class="deleteUser">X</div></th>
                        </tr>
                        <tr>
                            <td>${dataObj.name}</td>
                            <td>${dataObj.surname}</td>
                            <td>${dataObj.phone}</td>
                            <td>${dataObj.email}</td>
                        </tr>
                      </thead>`;
                      

        $userList.prepend(user);
    }

    function removeUser() {

        $(this).parent().parent().parent().remove();

        deleteUser($(this).parent().parent().parent().data('userId'));
    }


    
    var dialog, form,
    
        emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        name = $userName,
        surname = $userSurname,
        phone = $userPhone,
        email = $userEmail,
        allFields = $( [] ).add(name)
                        .add(surname)
                        .add(phone)
                        .add(email),
        tips = $('.validateTips');
    
    function updateTips(t) {
        tips
        .text(t)
        .addClass('ui-state-highlight');
        setTimeout(function() {
        tips.removeClass( 'ui-state-highlight', 1500 );
        }, 500 );
    }
    
    function checkLength( o, n, min, max ) {
        if ( o.val().length > max || o.val().length < min ) {
        o.addClass( 'ui-state-error' );
        updateTips( 'Length of ' + n + ' must be between ' +
            min + ' and ' + max + '.' );
        return false;
        } else {
        return true;
        }
    }
    
    function checkRegexp( o, regexp, n ) {
        if ( !( regexp.test( o.val() ) ) ) {
        o.addClass( 'ui-state-error' );
        updateTips( n );
        return false;
        } else {
        return true;
        }
    }
    
    function addUser() {
        var valid = true;
        allFields.removeClass( 'ui-state-error' );
    
        valid = valid && checkLength( name, 'username', 3, 16 );
        valid = valid && checkLength( surname, 'usersurname', 3, 16 );
        valid = valid && checkLength( phone, 'phone', 5, 16 );
        valid = valid && checkLength( email, 'email', 6, 80 );
    
        valid = valid && checkRegexp( name, /^[a-z]([0-9a-z_\s])+$/i, 'Username may consist of a-z, 0-9, underscores, spaces and must begin with a letter.' );
        valid = valid && checkRegexp( surname, /^[a-z]([0-9a-z_\s])+$/i, 'Usersurname may consist of a-z, 0-9, underscores, spaces and must begin with a letter.' );
        valid = valid && checkRegexp( phone, /^([0-9a-zA-Z])+$/, 'Phone field only allow : 0-9' );
        valid = valid && checkRegexp( email, emailRegex, 'eg. ui@jquery.com' );
    
        if (valid) {
            
        const newUser = {name: $userName.val(),
                        surname: $userSurname.val(),
                        phone: $userPhone.val(),
                        email: $userEmail.val()};

        postUser(newUser);

        dialog.dialog( 'close' );
        }
        return valid;
    }
    
    dialog = $( '#dialog-form' ).dialog({
        autoOpen: false,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
            'Create an account': addUser,
            Cancel: function() {
                dialog.dialog('close');
            }
        },
        close: function() {
        form[0].reset();
        allFields.removeClass( 'ui-state-error' );
        }
    });
    
    form = dialog.find( 'form' ).on( 'submit', function(event) {
        event.preventDefault();
        addUser();
    });
    
    $( '#create-user' ).button().on( 'click', function() {
        dialog.dialog('open');
    });
    

    function postUser(newUser) {
        fetch(USER_LIST_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
            .then((res) => res.json())
            .then((data) => generateHtml(data));
    }

    function deleteUser(id) {
        fetch(USER_LIST_URL + '/' + id, {
            method: 'DELETE',
        });
    }

});


































