import type {Meta, StoryObj} from '@storybook/react-vite'
import {Button, type ButtonProps} from '../lib/components/Button'

const meta = {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        variant: {control: {type: 'select'}, options: ['primary', 'secondary', 'ghost']},
        size: {control: {type: 'select'}, options: ['sm', 'md', 'lg']},
    },
    args: {children: 'Button'},
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Colors: Story = {
    render: (args: ButtonProps) => (
        <>
            <Button {...args} size="md" variant="primary">Button (Primary)</Button>{' '}
            <Button {...args} size="md" variant="secondary">Button (Secondary)</Button>{' '}
            <Button {...args} size="md" variant="ghost">Button (Ghost)</Button>
        </>
    )
}

export const Sizes: Story = {
    render: (args: ButtonProps) => (
        <>
            <Button {...args} size="sm">Button (sm)</Button>{' '}
            <Button {...args} size="md">Button (md)</Button>{' '}
            <Button {...args} size="lg">Button (lg)</Button>{' '}
            <Button {...args} size="xl">Button (xl)</Button>
        </>
    ),
    args: {variant: 'primary'},
}

export const Disabled: Story = {
    args: {variant: 'primary', size: 'md', disabled: true, children: 'Disabled'},
}
