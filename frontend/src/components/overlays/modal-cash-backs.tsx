import {observer} from "mobx-react-lite";
import {Center, Group, Image, Menu, Modal, Paper, Text} from "@mantine/core";
import React from "react";
import {storeCashBacks} from "../../store/cashbacks-list";
import {IdCardIcon} from "@radix-ui/react-icons";
import mir from "../../meta/mir-logo.svg"

export const ModalCashBacks = observer(() => {

    const {isOpen, setIsOpen} = storeCashBacks

    return (
        <Modal
            transition="fade"
            transitionDuration={1000}
            transitionTimingFunction="ease"
            opened={isOpen}
            size={"xl"}
            onClose={() => setIsOpen(false)}
            title={"Cashbacks"}>
            <Center>
                <Paper color={"green"} padding="xs" shadow="xl" radius="xl" withBorder>
                        <Group>
                            <Image src={mir} height={20}/>
                            <Group>
                                <Text>****4956</Text>
                                <Text color={"gray"}>
                                10/23
                                </Text>
                                <Menu>
                                    <Menu.Item color={"red"}> Удалить карту </Menu.Item>
                                </Menu>
                            </Group>
                        </Group>
                </Paper>
            </Center>
        </Modal>

    )

})