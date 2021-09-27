/*
import React, { Component } from 'react'
import Link from './Link'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const LINKS = gql`
    query {
        messages {
            id
            text
            sender
        }
    }
`

const NEW_MESSAGES = gql`
    subscription {
        messages {
            id
            text
            sender
        }
    }
`
class Links extends Component {
    _subscribeToNewLinks = subscribeToMore => {
        subscribeToMore({
            document: NEW_MESSAGES,
            updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev

                const messages = subscriptionData.data.messages

                return Object.assign({}, prev, {
                    messages: messages,
                    __typename: prev.messages.__typename
                })
            }
        })
    }

    render() {
        return (
            <Query query={LINKS}>
                {({ loading, error, data, subscribeToMore }) => {
                    if (loading) return <div>Loading...</div>
                    if (error) return <div>Error</div>
                    this._subscribeToNewLinks(subscribeToMore)
                    const linksToRender = data.messages

                    return (
                        <div>
                            <h3>Neat Links</h3>
                            <div>
                                {linksToRender.map(message => <Link key={message.id} message={message} />)}
                            </div>
                        </div>
                    )
                }}
            </Query>
        )
    }
}

export default Links*/
