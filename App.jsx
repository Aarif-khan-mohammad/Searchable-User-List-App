import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer'
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer'
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer'
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer'
  },
  {
    "uniqueNo": 21,
    "imageUrl": "https://i.ibb.co/6nxYCBK/fun-3d-cartoon-teenage-boy.jpg",
    "name": "James William",
    "role": "Frontend Developer"
  },
  {
    "uniqueNo": 5,
    "imageUrl": "https://i.ibb.co/d55wRRj/fun-cartoon-kid-with-rain-gear.jpg",
    "name": "Jane Smith",
    "role": "Backend Developer"
  },
  {
    "uniqueNo": 6,
    "imageUrl": "https://i.ibb.co/KW3jYXD/Whats-App-Image-2024-01-15-at-6-28-51-PM.jpg",
    "name": "Alice Johnson",
    "role": "Full Stack Developer"
  },
  {
    "uniqueNo": 7,
    "imageUrl": "https://i.ibb.co/txLfC2T/32243.jpg",
    "name": "Bob Brown",
    "role": "Software Engineer"
  },
  {
    "uniqueNo": 8,
    "imageUrl": "https://i.ibb.co/6nxYCBK/fun-3d-cartoon-teenage-boy.jpg",
    "name": "Eve Wilson",
    "role": "DevOps Engineer"
  },
  {
    "uniqueNo": 9,
    "imageUrl": "https://i.ibb.co/d55wRRj/fun-cartoon-kid-with-rain-gear.jpg",
    "name": "Michael Davis",
    "role": "UI/UX Designer"
  },
  {
    "uniqueNo": 10,
    "imageUrl": "https://i.ibb.co/KW3jYXD/Whats-App-Image-2024-01-15-at-6-28-51-PM.jpg",
    "name": "Sarah Lee",
    "role": "Product Manager"
  },
  {
    "uniqueNo": 11,
    "imageUrl": "https://i.ibb.co/txLfC2T/32243.jpg",
    "name": "David Thompson",
    "role": "Data Scientist"
  },
  {
    "uniqueNo": 12,
    "imageUrl": "https://i.ibb.co/6nxYCBK/fun-3d-cartoon-teenage-boy.jpg",
    "name": "Emily Clark",
    "role": "Business Analyst"
  },
  {
    "uniqueNo": 13,
    "imageUrl": "https://i.ibb.co/d55wRRj/fun-cartoon-kid-with-rain-gear.jpg",
    "name": "Chris Adams",
    "role": "Quality Assurance"
  },
  {
    "uniqueNo": 14,
    "imageUrl": "https://i.ibb.co/KW3jYXD/Whats-App-Image-2024-01-15-at-6-28-51-PM.jpg",
    "name": "Rachel Moore",
    "role": "Project Manager"
  },
  {
    "uniqueNo": 15,
    "imageUrl": "https://i.ibb.co/txLfC2T/32243.jpg",
    "name": "Tom Wilson",
    "role": "Technical Writer"
  },
  {
    "uniqueNo": 16,
    "imageUrl": "https://i.ibb.co/6nxYCBK/fun-3d-cartoon-teenage-boy.jpg",
    "name": "Laura Hall",
    "role": "Network Engineer"
  },
  {
    "uniqueNo": 17,
    "imageUrl": "https://i.ibb.co/d55wRRj/fun-cartoon-kid-with-rain-gear.jpg",
    "name": "Peter White",
    "role": "Security Analyst"
  },
  {
    "uniqueNo": 18,
    imageUrl: "https://i.ibb.co/KW3jYXD/Whats-App-Image-2024-01-15-at-6-28-51-PM.jpg",
    "name": "Olivia Green",
    "role": "Database Administrator"
  },
  {
    "uniqueNo": 19,
    "imageUrl": "https://i.ibb.co/txLfC2T/32243.jpg",
    "name": "Alex Miller",
    "role": "Systems Analyst"
  },
  {
    "uniqueNo": 20,
    "imageUrl": "https://i.ibb.co/6nxYCBK/fun-3d-cartoon-teenage-boy.jpg",
    "name": "Grace Anderson",
    "role": "Cloud Architect"
  }
]

class App extends Component {
  state = {
    searchInput: '',
    usersDetailsList: initialUserDetailsList
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value
    })
  }

  deleteUser = uniqueNo => {
    const {usersDetailsList} = this.state
    const filteredUsersData = usersDetailsList.filter(
      each => each.uniqueNo !== uniqueNo
    )
    this.setState({
      usersDetailsList: filteredUsersData
    })
  }

  render() {
    const {searchInput, usersDetailsList} = this.state
    const searchResults = usersDetailsList.filter(eachUser =>
      eachUser.name.includes(searchInput)
    )
    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />
        <ul className="usercard">
          {searchResults.map(eachUser => (
            <UserProfile
              userDetails={eachUser}
              key={eachUser.uniqueNo}
              deleteUser={this.deleteUser}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App