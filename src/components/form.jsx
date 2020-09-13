import React from 'react';
import ElementForm from "./input";

export default class PersonForm extends React.Component {
    constructor(props){
        super(props);
        this.inputsOpts = {
            // cardtemplname
            lastname: {type: 'text', placeholder: 'Фамилия'},
            firstname: {type: 'text', placeholder: 'Имя'},
            patronymic: {type: 'text', placeholder: 'Отчество'},
            card: {type: 'text', className: 'App-input--middle'},
            orgnameshort: {type: 'text', className: 'App-input--middle', placeholder: 'Организация', defaultValue: 'Рога и Копыта'},
            idperson: {type: 'number', defaultValue: '102', className: 'App-input--short', placeholder: 'id', disabled: true},
            idcard: {type: 'number', maxLength: 5, className: 'App-input--short' },
            acc1num: {type: 'number', maxLength: 20},
            statusname: {type: 'select', defaultValue: 'Новый', options: ['Новый', 'Действующий']},
            persontypename: {type: 'select', defaultValue: 'Физ. лицо', options: ['Физ. лицо', 'Юр. лицо', 'ИП']},
            currname: {type: 'text', defaultValue: 'RUR', className: 'App-input--short', },
            birthdate: {type: 'date'},
            docseries: {type: 'number', maxLength: 4, className: 'App-input--short' },
            docnum: {type: 'number', maxLength: 6, className: 'App-input--middle' },
            doctypename: {type: 'select', defaultValue: 'Паспорт РФ', options: ['Паспорт РФ']},
            idtaskauthstatus: {type: 'number', defaultValue: '10', className: 'App-input--short'},
        }
        this.state = this.initFields(props.fields)
        this.initFields = this.initFields.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render(){
        const fields = this.props.fields.map( name => {
            return (<div className="App-personForm-item grid-item" key={`${name}Wrapper`}>
                <ElementForm {...this.inputsOpts[name]}
                             name={name}
                             handleChange={this.handleChange}
                             value={this.state[name]}
                />
            </div>)
        })

        return (
            <>
                <div className="App-overflow"></div>

                { fields }

                <div className="App-personForm-item grid-item App-btnWrapper">
                    <button className="App-btnOk" onClick={() => {
                        this.props.handlerToggleEditing()
                        this.props.handlerOk(this.state)
                    }}>Ok</button>
                    <div className="App-link App-btnCancel" onClick={ this.props.handlerToggleEditing }>Отмена</div>
                </div>
            </>
        )
    }

    initFields(fields) {
        const opts = this.inputsOpts
        const inputs = {}
        fields.forEach(name => {
            inputs[name] = (name in opts && 'defaultValue' in opts[name]) ? opts[name].defaultValue : ''
        })
        return inputs
    }
}
