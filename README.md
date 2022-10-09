# Simple React Context 1

This React factors three components: Outer, Middle, and Inner:

```
|-Outer---------------------|
|             `message`     |
| |-Middle--------|-------| |
| |               |       | |
| | |-Inner-------|-----| | |
| | |             ↓     | | |
| | |-------------------| | |
| |                       | |
| |-----------------------| |
|                           |
|---------------------------|
```

Right now, `message` is defined in `Outer`, passed into `Middle`, which passes it into `Inner`. Refactor it to use the Context  API so that `message` bypasses the `Middle` component entirely.

```
|-Outer---------------------|
|             `message`----------
| |-Middle----------------| |   |
| |                       | |   |
| | |-Inner-------------| | |   |
| | |             ←--------------
| | |-------------------| | |
| |                       | |
| |-----------------------| |
|                           |
|---------------------------|
```

---

Refactor this code to use Context instead of props:

```js
function Outer(){
  const [user, setUser] = useState("Bill")
  const logout = () => setUser("null")

  return (
    <Middle logout={ logout } />
  )
}

function Middle({ logout }){
  return (
    <Inner logout={ logout } />
  )
}

function Inner({ logout }){
  return (
    <button onClick={ logout }>Logout</button>
  )
}
```
