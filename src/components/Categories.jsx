import React from 'react'


// class Categories extends Component {

// state = {
//         activeitem: 0
//     }

//     onSelectItem = index => {
//         this.setState({
//             activeitem: index
//         })
//     }

//     render() {
//         const { onClickitem, items } = this.props
//         return (
//             <div>
//                 <div className="categories">
//                     <ul>
//                         <li >Все</li>
//                         {
//                             items.map((name, index) => <li className={this.state.activeitem === index ? 'active' : ''}
//                                 onClick={() => this.onSelectItem(index)}
//                                 key={`${name}_${index}`}>
//                                 {name}
//                             </li>)
//                         }
//                     </ul>
//                 </div>
//             </div>
//         )
//     }
// }



function Categories({ items, onClick }) {

    const [activeItem, setActiveItem] = React.useState(null)

    return (
        <div>
            <div className="categories">
                <ul>
                    <li >Все</li>
                    {
                        items.map((name, index) => <li className={activeItem === index ? 'active' : 'null'}
                            onClick={() => setActiveItem(index)}
                            key={`${name}_${index}`}>
                            {name}
                        </li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Categories
