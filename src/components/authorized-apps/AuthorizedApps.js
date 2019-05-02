import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom'

import { Wallet } from '../../utils/wallet'

import PaginationBlock from '../pagination/PaginationBlock'
import ListItem from '../dashboard/ListItem'

import AuthorizedAppsContainer from './AuthorizedAppsContainer'

import TContractImage from '../../images/icon-t-contract.svg'
import activityGreyImage from '../../images/icon-activity-grey.svg'
import AccountGreyImage from '../../images/icon-account-grey.svg'
import AuthorizedGreyImage from '../../images/icon-authorized-grey.svg'
import ContactsGreyImage from '../../images/icon-contacts-grey.svg'

import TStakeImage from '../../images/icon-t-stake.svg'
import TTransferImage from '../../images/icon-t-transfer.svg'
import NearkatImage from '../../images/footer-nearkat.svg'

class AuthorizedApps extends Component {
   state = {
      loader: false,
      showSub: false,
      showSubOpen: 0,
      activity: [],
      filterTypes: [
         { img: '', name: 'ALL' },
         { img: '', name: 'ALL' },
         { img: '', name: 'ALL' },
         { img: '', name: 'ALL' }
      ]
   }

   toggleShowSub = i => {
      i = i == null ? this.state.showSubOpen : i

      this.setState(state => ({
         showSub: i === state.showSubOpen ? !state.showSub : state.showSub,
         showSubOpen: i
      }))
   }

   componentDidMount() {
      // this.wallet = new Wallet()
      // this.props.handleRefreshUrl(this.props.location)
      // this.props.handleRefreshAccount(this.wallet, this.props.history)

      this.setState(() => ({
         loader: true
      }))

      setTimeout(() => {
         this.setState(_ => ({
            activity: [
               [NearkatImage, 'NEAR Place', '3 hrs ago', ''],
               [NearkatImage, 'Cryptocats', '5 hrs ago', ''],
               [NearkatImage, 'Knights App', '2 days ago', ''],
               [NearkatImage, 'NEAR Place', '3 hrs ago', ''],
               [NearkatImage, 'Cryptocats', '5 hrs ago', ''],
               [NearkatImage, 'Knights App', '2 days ago', ''],
               [NearkatImage, 'NEAR Place', '3 hrs ago', ''],
               [NearkatImage, 'Cryptocats', '5 hrs ago', ''],
               [NearkatImage, 'Knights App', '2 days ago', ''],
               [NearkatImage, 'NEAR Place', '3 hrs ago', '']
            ],
            loader: false
         }))
      }, 1000)
   }

   render() {
      const { loader, activity, filterTypes, showSub, showSubOpen } = this.state

      return (
         <AuthorizedAppsContainer>
            <PaginationBlock
               filterTypes={filterTypes}
               showSub={showSub}
               toggleShowSub={this.toggleShowSub}
               subPage='authorized-apps'
            >
               {activity.map((row, i) => (
                  <ListItem
                     row={row}
                     i={i}
                     wide={true}
                     showSub={showSub}
                     toggleShowSub={this.toggleShowSub}
                     showSubOpen={showSubOpen}
                  />
               ))}
            </PaginationBlock>
         </AuthorizedAppsContainer>
      )
   }
}

const mapDispatchToProps = {}

const mapStateToProps = ({}) => ({})

export const AuthorizedAppsWithRouter = connect(
   mapStateToProps,
   mapDispatchToProps
)(withRouter(AuthorizedApps))
