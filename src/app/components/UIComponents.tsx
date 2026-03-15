import { 
  Button, 
  Input, 
  Select, 
  Card, 
  Checkbox, 
  Switch, 
  Space, 
  Typography as AntTypography, 
  Divider,
  Tag
} from 'antd';
import { 
  SearchOutlined, 
  SettingOutlined, 
  BellOutlined, 
  CheckOutlined 
} from '@ant-design/icons';

const { Title, Paragraph, Text } = AntTypography;

export function UIComponents() {
  return (
    <div className="h-full overflow-auto bg-white p-4 md:p-8 lg:p-16">
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-12 lg:space-y-16">
        {/* Header */}
        <div>
          <Title level={1} style={{ color: '#1B2A6B', margin: 0, fontSize: '48px', fontWeight: '700' }}>
            UI Components
          </Title>
          <div className="w-16 h-1 bg-[#2CB5E3] mt-4 mb-6"></div>
          <Paragraph style={{ color: '#4A5568', fontSize: '18px', lineHeight: '1.6' }}>
            We use <strong>Ant Design (AntD)</strong> as our primary enterprise UI library. 
            The system is customised with AURMAK's brand tokens to ensure visual consistency 
            across all hybrid venture platforms.
          </Paragraph>
        </div>

        {/* Grid & Spacing */}
        <div className="space-y-8">
          <Title level={2} style={{ color: '#1B2A6B', fontSize: '28px', fontWeight: '600' }}>
            Grid & Spacing
          </Title>
          <Paragraph style={{ color: '#4A5568', fontSize: '16px', maxWidth: '48rem' }}>
            We employ an 8pt grid system for all layout and component design. This ensures a mathematical 
            balance and consistency across the AURMAK product ecosystem. Spacing increments are strictly 
            multiples of 4pt or 8pt.
          </Paragraph>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F4F6F8] p-8 rounded-sm border border-gray-200">
              <Text strong style={{ color: '#1B2A6B', fontSize: '18px', display: 'block', marginBottom: '24px' }}>Standard Spacing Scale</Text>
              <div className="space-y-4">
                {[4, 8, 16, 24, 32, 48, 64].map((size) => (
                  <div key={size} className="flex items-center space-x-4">
                    <div className="w-16 text-xs font-mono text-gray-500 uppercase">{size}pt</div>
                    <div className="h-4 bg-[#2CB5E3]" style={{ width: `${size}px` }}></div>
                    <Text type="secondary" style={{ fontSize: '12px' }}>tailwind: {size / 4}</Text>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#F4F6F8] p-8 rounded-sm border border-gray-200">
              <Text strong style={{ color: '#1B2A6B', fontSize: '18px', display: 'block', marginBottom: '24px' }}>Corner Radius Standards</Text>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-3">
                  <div className="h-20 bg-white border-2 border-[#1B2A6B] rounded-lg flex items-center justify-center font-mono text-xs">8px / Default</div>
                  <Text type="secondary" style={{ fontSize: '12px' }}>Standard AntD default for buttons, inputs, and cards. Modern, approachable aesthetic.</Text>
                </div>
                <div className="space-y-3">
                  <div className="h-20 bg-white border-2 border-[#1B2A6B] rounded-full flex items-center justify-center font-mono text-xs">Full / Rounded</div>
                  <Text type="secondary" style={{ fontSize: '12px' }}>Used for status indicators, badges, toggle switches, and avatar components.</Text>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <Title level={2} style={{ color: '#1B2A6B', fontSize: '28px', fontWeight: '600', margin: 0 }}>
              Buttons
            </Title>
            <Tag color="blue" style={{ fontFamily: 'monospace' }}>AntD Button</Tag>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Space orientation="vertical" size="large" className="w-full">
              <Text strong style={{ fontSize: '16px' }}>Primary</Text>
              <div className="bg-[#F4F6F8] p-6 rounded-sm border border-gray-200 flex flex-col gap-4">
                <Button type="primary" block>Primary Button</Button>
                <Button type="primary" icon={<SearchOutlined />} block>With Icon</Button>
                <Button type="primary" disabled block>Disabled</Button>
              </div>
            </Space>

            <Space orientation="vertical" size="large" className="w-full">
              <Text strong style={{ fontSize: '16px' }}>Default / Secondary</Text>
              <div className="bg-[#F4F6F8] p-6 rounded-sm border border-gray-200 flex flex-col gap-4">
                <Button block>Default Button</Button>
                <Button icon={<SettingOutlined />} block>Settings</Button>
                <Button disabled block>Disabled</Button>
              </div>
            </Space>

            <Space orientation="vertical" size="large" className="w-full">
              <Text strong style={{ fontSize: '16px' }}>Ghost / Outline</Text>
              <div className="bg-[#F4F6F8] p-6 rounded-sm border border-gray-200 flex flex-col gap-4">
                <Button type="dashed" block>Dashed Button</Button>
                <Button type="text" block icon={<BellOutlined />}>Ghost Icon</Button>
              </div>
            </Space>

            <Space orientation="vertical" size="large" className="w-full">
              <Text strong style={{ fontSize: '16px' }}>Links</Text>
              <div className="bg-[#F4F6F8] p-6 rounded-sm border border-gray-200 flex flex-col gap-4">
                <Button type="link" block>Standard Link</Button>
                <Button type="link" block danger>Danger Link</Button>
              </div>
            </Space>
          </div>
        </div>

        {/* Form Inputs */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <Title level={2} style={{ color: '#1B2A6B', fontSize: '28px', fontWeight: '600', margin: 0 }}>
              Form Inputs
            </Title>
            <Tag color="blue" style={{ fontFamily: 'monospace' }}>AntD Input & Select</Tag>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4 bg-[#F4F6F8] p-8 rounded-sm border border-gray-200">
              <Text strong style={{ fontSize: '14px' }}>Standard Input</Text>
              <Input placeholder="Enter text..." />
            </div>

            <div className="space-y-4 bg-[#F4F6F8] p-8 rounded-sm border border-gray-200">
              <Text strong style={{ fontSize: '14px' }}>With Prefix</Text>
              <Input prefix={<SearchOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Search..." />
            </div>

            <div className="space-y-4 bg-[#F4F6F8] p-8 rounded-sm border border-gray-200">
              <Text strong style={{ fontSize: '14px' }}>Select Component</Text>
              <Select 
                className="w-full"
                placeholder="Select option"
                options={[
                  { value: '1', label: 'Venture Alpha' },
                  { value: '2', label: 'Venture Beta' },
                  { value: '3', label: 'Venture Gamma' },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Cards & Status */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <Title level={2} style={{ color: '#1B2A6B', fontSize: '28px', fontWeight: '600', margin: 0 }}>
              Cards & Selection
            </Title>
            <Tag color="blue" style={{ fontFamily: 'monospace' }}>AntD Card & Checkbox</Tag>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card 
              title={<Text strong style={{ color: '#1B2A6B' }}>Enterprise Card</Text>} 
              style={{ borderColor: '#E5E7EB' }}
              extra={<Button type="link">Details</Button>}
            >
              <Paragraph style={{ color: '#4A5568' }}>
                Ant Design cards are used for grouping content into clear, distinct containers. 
                They use the default AntD rounded corners for a modern, approachable feel.
              </Paragraph>
              <Space>
                <Tag color="cyan">Active</Tag>
                <Tag color="processing">Engineering</Tag>
              </Space>
            </Card>

            <div className="bg-[#F4F6F8] p-8 rounded-sm border border-gray-200">
              <Title level={4} style={{ color: '#1B2A6B', marginBottom: '24px' }}>Selection Controls</Title>
              <Space orientation="vertical" size="middle">
                <Checkbox defaultChecked>Option A (Selected)</Checkbox>
                <Checkbox>Option B (Default)</Checkbox>
                <Divider style={{ margin: '8px 0' }} />
                <Space size="large">
                  <Switch defaultChecked />
                  <Text>Toggle Feature</Text>
                </Space>
              </Space>
            </div>
          </div>
        </div>

        {/* Component Library Note */}
        <div className="bg-[#1B2A6B] text-white p-12 rounded-sm shadow-xl">
          <Title level={2} style={{ color: '#2CB5E3', marginBottom: '24px' }}>
            Implementation Guide
          </Title>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <Title level={4} style={{ color: '#ffffff' }}>Ant Design Configuration</Title>
              <ul className="space-y-3 text-sm opacity-90">
                <li className="flex items-start">
                  <CheckOutlined style={{ color: '#2CB5E3', marginRight: '12px', marginTop: '4px' }} />
                  <span>ConfigProvider wraps the application for global token delivery</span>
                </li>
                <li className="flex items-start">
                  <CheckOutlined style={{ color: '#2CB5E3', marginRight: '12px', marginTop: '4px' }} />
                  <span>Theme overrides for Navy (#1B2A6B) and Cyan (#2CB5E3)</span>
                </li>
                <li className="flex items-start">
                  <CheckOutlined style={{ color: '#2CB5E3', marginRight: '12px', marginTop: '4px' }} />
                  <span>Default AntD 6.3 rounded corners for modern aesthetic</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <Title level={4} style={{ color: '#ffffff' }}>Brand Token Mapping</Title>
              <div className="bg-[#0F1937] p-6 rounded font-mono text-xs text-[#2CB5E3]">
                <pre>{`{
  token: {
    colorPrimary: "#2CB5E3",
    colorInfo: "#2CB5E3",
    colorText: "#1B2A6B",
    fontFamily: "Inter"
  }
}`}</pre>
              </div>
            </div>
          </div>
        </div>

        {/* Accessibility Standards */}
        <div className="bg-[#F4F6F8] border-l-4 border-[#2CB5E3] p-8 rounded-sm">
          <Title level={3} style={{ color: '#1B2A6B', fontSize: '20px', marginBottom: '16px' }}>
            Accessibility & Standards
          </Title>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Text strong style={{ color: '#1B2A6B', display: 'block', marginBottom: '12px' }}>Web Accessibility</Text>
              <ul className="space-y-2 text-sm text-[#4A5568]">
                <li className="flex items-start">
                  <span className="text-[#2CB5E3] mr-2">•</span>
                  <span>AntD components are tested for keyboard accessibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2CB5E3] mr-2">•</span>
                  <span>Minimum 4.5:1 contrast for all interface text</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2CB5E3] mr-2">•</span>
                  <span>ARIA labels integrated into custom Form templates</span>
                </li>
              </ul>
            </div>
            <div>
              <Text strong style={{ color: '#1B2A6B', display: 'block', marginBottom: '12px' }}>Enterprise Standards</Text>
              <ul className="space-y-2 text-sm text-[#4A5568]">
                <li className="flex items-start">
                  <span className="text-[#2CB5E3] mr-2">•</span>
                  <span>Consistent feedback states (Loading, Success, Error)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2CB5E3] mr-2">•</span>
                  <span>Responsive grid layout matching AntD breakpoints</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2CB5E3] mr-2">•</span>
                  <span>Centralised token management via Design System Team</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
