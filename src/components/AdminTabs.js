import React from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import './AboutTabs.css'

export default function AdminTabs(props) {
    return (
        <Tabs>
            <TabList>
                {props.tabs.map((element, index) => {
                    return (
                        <Tab key={index}>{element.title}</Tab>
                    )
                })}
            </TabList>
            {props.tabs.map((element, index) => {
                return (
                    <TabPanel index={index} key={index}>
                        <div className='test'> {<element.element tasks={props.tasks} getTasks={props.getTasks} />}</div>
                    </TabPanel>
                )
            })}
        </Tabs>
    )
}