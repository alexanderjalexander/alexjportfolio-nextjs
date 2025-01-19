"use client"

import {Tab, Tabs} from "@heroui/tabs";

export default function Dashboard() {
    return (
        <Tabs aria-label={"Options"} radius={"md"} variant={"bordered"}
              classNames={{
                  tabList: "border-primary-400",
                  cursor: "group-data-[selected=true]:bg-primary-400",
              }}
        >
            <Tab key="categories-and-skills" title="Categories & Skills">
                Hello!
            </Tab>
        </Tabs>
    )
}