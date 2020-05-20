// Liskow substitution pricple

class Person {

}
class Member extends Person{
    access() {
        console.log(' you can access')
    }
}
class Guest extends Person {
    isGuest = true
}

class Frontend extends Member {
    canCreateFrontend() {

    }
}
class Backend extends Member {
    canBackend() {

    }
}
class PersonFromDifferentCompany extends Guest {
    access() {
        throw new Error('you no access')
    }
}

function openSecretDoor(member) {
    member.access()
}

openSecretDoor(new Frontend())
openSecretDoor(new Backend())


//==================
//example2

class Component {
  isComponent = true
}
class ComponentWithTemplate extends Component{
    render() {
        return `<div>Component</div>`
    }
}
class HightOrderComponent extends Component {

}

class HeaderComponent extends ComponentWithTemplate{
   onInit() {

   }
}
class FooterComponent extends ComponentWithTemplate{
    agterInit() {

    }
}
class HOC extends HightOrderComponent {
    render() {
        throw new Error('error')
    }
    wrapComponent(component) {
        component.wraped = true
        return component
    }
}

function renderComponent(component) {
    console.log(component.render())
}
renderComponent(new HeaderComponent())
renderComponent(new FooterComponent())












