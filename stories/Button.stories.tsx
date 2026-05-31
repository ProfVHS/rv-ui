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

export const Primary: Story = {args: {variant: 'primary', size: 'md'}}

export const Secondary: Story = {args: {variant: 'secondary', size: 'md'}}

export const Ghost: Story = {args: {variant: 'ghost', size: 'md'}}

export const Sizes: Story = {
    render: (args: ButtonProps) => (
        <>
            <Button {...args} size="sm">Small</Button>{' '}
            <Button {...args} size="md">Medium</Button>{' '}
            <Button {...args} size="lg">Large</Button>
        </>
    ),
    args: {variant: 'primary'},
}

export const Disabled: Story = {
    args: {variant: 'primary', size: 'md', disabled: true, children: 'Disabled'},
}
