var SButton = React.createClass({displayName: "SButton",

    componentWillReceiveProps: function(nextProps) {
        this.setState({button_state: nextProps.button_state})
    },

    getInitialState: function() {
        return { button_state: this.props.button_state };
    },

    render: function() {
        var label = this.props.initial_label;

        if(this.state.button_state){
          var label = this.props.loading_label;
        }
        return (
            React.createElement("button", {className: this.props.className, onClick: this.props.onClick},  label )
        );
    }
});

module.exports = SButton;
