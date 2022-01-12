import React, {Component} from 'react';
import {render} from 'react-dom';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import { arrayMove } from 'react-sortable-hoc';
import { Alert } from 'react-bootstrap';

const SortableItem = SortableElement(({value}) => <li className="list-group-item">{value}</li>);

const SortableList = SortableContainer(({items}) => {
    return (
        <ul class="list-group" style={{"borderColor":"white", "borderWidth":"12"}} >
            {items.map((value, index) => (
                <SortableItem key={`item-${value}`} index={index} value={value}/>
            ))}
        </ul>
    );
});

export default class SortableComponent extends Component {
    state = {
        items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
    };
    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({items}) => ({
            items: arrayMove(items, oldIndex, newIndex),
        }));
    };
    render() {
        return <SortableList
            items={this.state.items}
            onSortEnd={this.onSortEnd} />;
    }
}
