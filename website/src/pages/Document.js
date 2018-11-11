import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { connectStore } from 'redux-box'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import snackbarModule from '@nocodesites/redux-modules/lib/modules/snackbar'

import styles from '../styles/document'
import selectors from '../selectors'

@connectStore({
  snackbar: snackbarModule,
})
@connect((state, ownProps) => {
  const route = ownProps.route
  const doc = selectors.item(state, 'document', route.documentId)
  return {
    doc,
  }
})
class DocumentPage extends React.Component {

  render() {

    const {
      classes,
      doc,
    } = this.props

    return (
      <div className="document-container">
        <Typography variant="title" className={ classes.pageHeader }>Title</Typography>
        <div dangerouslySetInnerHTML={{__html: doc.html}}>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(DocumentPage)