

/** 
 *  RAP NAME GENERATOR
 *  The user will insert their first name and on click receive one of several
 *  possible outputs (i.e. Jill).
 *
 *       "Inspectah Jill"
 *       "J.I.L.L. the Genius"
 *       "Chief Jill the Disciple"
 *       "Jill the Disciple"
 *       "Inspectah J"
 **/

function Generator() {

    /* Name Arrays: Customize names to change possible output */
    this.last_names = ['the Chef', 'Digital', 'Wise', 'Knight', 'Wrecka', 'the Genius', 'the Zoo Keeper', 'the Monk', 'the Scientist', 'the Disciple', 'the Darkman', 'Pellegrino', 'the Ill Figure', 'Rocks The World', 'the Baptist'];
    this.first_names = ['Inspectah', 'Masta', 'Poppa', 'Five Foot', 'Ghostface', 'Old Dirty'];
    this.generateName = function(input){
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values_inclusive
        if(Math.floor(Math.random()*5) == 0){
            input = input.toUpperCase().split('').join('.')
        }
        if (Math.floor(Math.random() * 2) == 0){
            return this.first_names.random() + ' ' + input
        }
        else {
            return input + ' ' + this.last_names.random()
        }
    }
}

$(document).ready(function() {

    var engine = new Generator;
    
    
    $('#enter').click(function(){
        populateResponse(engine)
    })

});

function populateResponse(generator){
    var name = getName()
    if (name != '') {
        $('.response').text(generator.generateName(name))
        displayResponse()
    }
    else{
        hideResponse()
    }
}

Array.prototype.random = function() {
    return this[Math.floor(Math.random() * (this.length))]
}

function getName(){
    if ($('#user-input').val() == '') {
        displayError()
        return ''
    }
    else {
        hideError()
        return $('#user-input').val()
    }
}

function displayError(){
    $('.error').css('display','block')
}

function hideError(){
    $('.error').css('display','none')
}

function displayResponse(){
    $('.response').css('display','block')
}

function hideResponse(){
    $('.response').text('').css('display','none')
}
