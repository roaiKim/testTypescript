import React from 'react';
import "./index.less";

interface Props {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    disabled?: boolean;
}

interface State {
    internaValue: string;
    isFocused: boolean;
}

class InputNumber extends React.PureComponent<Props, State> {
    public static defaultProps = {

    }

    canMinus = () => true

    canAdd = () => true

    minus = () => {

    }

    add = () => {

    }

    onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        this.props.onChange(Number(value))
    }

    render() {
        const stepperMode = "sty";
        const { disabled, value } = this.props;
        const displayedValue = value
        return (
            <div className={`comp-number-input stepper-${stepperMode} ${disabled ? "disabled" : ""}`}>
                <button type="button" className="minus" disabled={!this.canMinus()} onClick={this.minus}>
                    -
                </button>
                <input disabled={disabled} className="count-input"
                    value={displayedValue}
                    // readOnly={!editable}
                    // onFocus={this.onInputFocus}
                    // onBlur={this.onInputBlur}
                    onChange={this.onInputChange}
                // onKeyPress={this.onInputPress}
                />
                <button type="button" className="add" disabled={!this.canAdd()} onClick={this.add}>
                    +
                </button>
            </div>
        );
    }
}

export default InputNumber;

