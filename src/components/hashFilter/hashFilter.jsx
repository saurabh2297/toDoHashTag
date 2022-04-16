import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { removeHashTagFilter } from '../../redux/todos/todos.actions'
import { ReactComponent as RemoveIcon } from '../../assets/cross.svg'

const HashFiltersContainer = ({ hashTagFilters, removeHashTagFilter}) => (
  <div style={{padding:"4%"}}>
    {hashTagFilters.map((filterKey, index) => ( 
      <Button variant="info" size="sm" key={index} filterKey={filterKey} style={{marginRight:"2%",borderRadius:"60%"}}>
        {filterKey} 
        <RemoveIcon  isHashLabel 
          onClick={() => removeHashTagFilter(filterKey)}/>
      </Button>
    ))}
  </div>
)
const mapStateToProps = (state) => ({
  hashTagFilters: state.todos.hashTagFilters,
})

const mapDispatchToProps = (dispatch) => ({
  removeHashTagFilter: (hashTagFilter) =>
    dispatch(removeHashTagFilter(hashTagFilter)),
})
export default connect(mapStateToProps,mapDispatchToProps)(HashFiltersContainer)
