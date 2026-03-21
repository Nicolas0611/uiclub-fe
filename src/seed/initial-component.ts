const initialComponentData = [
  {
    name: "Accordion",
    description:
      "Accordions organize content into sections, putting the user in control of what information they want expanded and collapsed.",
    type: "Layout" as const,
    companyName: "ActiveCampaign" as const,
    link: "https://www.activecampaign.design/docs/components/accordion/camp-1",
    id: 141,
  },
  {
    name: "Popover",
    description:
      "Popovers are small overlays that open on demand and provide additional information and actions.\n\n",
    type: "Overlays" as const,
    companyName: "ActiveCampaign" as const,
    link: "https://www.activecampaign.design/docs/components/popover/camp-1",
    id: 157,
  },
  {
    name: "Table",
    description: "Tables allow the user to view and act on a set of data.\n\n",
    type: "Data" as const,
    companyName: "ActiveCampaign" as const,
    link: "https://www.activecampaign.design/docs/components/table/camp-1",
    id: 161,
  },
  {
    name: "Slider",
    description:
      "Sliders allow the user to make a selection in a visual way by dragging a handle along a track.\n\n",
    type: "Input" as const,
    companyName: "ActiveCampaign" as const,
    link: "https://www.activecampaign.design/docs/components/slider/camp-1",
    id: 160,
  },
  {
    name: "Tooltip",
    description:
      "Tooltips are triggered on hover. They provide additional information about an element, oftentimes providing context to an icon.\n\n",
    type: "Overlays" as const,
    companyName: "ActiveCampaign" as const,
    link: "https://www.activecampaign.design/docs/components/tooltip/camp-1",
    id: 166,
  },
  {
    name: "Radio Button",
    description:
      "Radios allow the user to select a single choice from a a list of two or more options that are mutually exclusive.\n\n",
    type: "Input" as const,
    companyName: "ActiveCampaign" as const,
    link: "https://www.activecampaign.design/docs/components/radio/camp-1",
    id: 159,
  },
  {
    name: "Table",
    description:
      "Toggle switches are often used for settings or to show and hide UI. They utilize a slide animation to indicate switching between two opposing options.\n",
    type: "Data" as const,
    companyName: "ActiveCampaign" as const,
    link: "https://www.activecampaign.design/docs/components/table/camp-1",
    id: 165,
  },
  {
    name: "Toggle",
    description:
      "Toggle switches are often used for settings or to show and hide UI. They utilize a slide animation to indicate switching between two opposing options.\n",
    type: "Input" as const,
    companyName: "ActiveCampaign" as const,
    link: "https://www.activecampaign.design/docs/components/toggle/camp-1",
    id: 164,
  },
  {
    name: "Tag",
    description:
      "Tags display essential contact data quickly and easily. Users can segment and target contacts based on the tags applied to them.\n\n",
    type: "Status" as const,
    companyName: "ActiveCampaign" as const,
    link: "https://www.activecampaign.design/docs/components/tag/camp-1",
    id: 163,
  },
  {
    name: "Avatar",
    description:
      "Avatars provide a placeholder identity for users and visually represent contacts and accounts within ActiveCampaign. They are also often used to help visually organize comment threads in Conversations.\n\n",
    type: "Images" as const,
    companyName: "ActiveCampaign" as const,
    link: "https://www.activecampaign.design/docs/components/avatar/camp-1",
    id: 142,
  },
  {
    name: "Alert banner",
    description:
      "ActiveCampaign’s static banners are persistent, non-obtrustive messages that sit inline with the page or modal content. They can be used for education, to let a user know that something in the system has changed, or to generally let the user know about a message that’s important to their workflow within ActiveCampaign.\n\n\n",
    type: "Messaging" as const,
    companyName: "ActiveCampaign" as const,
    link: "https://www.activecampaign.design/docs/components/banner/next-gen",
    id: 143,
  },
  {
    name: "Breadcrumbs",
    description:
      "Breadcrumbs help users navigate through the application and provide visual wayfinding.",
    type: "Navigation" as const,
    companyName: "ActiveCampaign" as const,
    link: "https://www.activecampaign.design/docs/components/breadcrumbs/camp-1",
    id: 144,
  },
  {
    name: "Button",
    description:
      "Buttons are used primarily to draw attention and initiate action, whether as a singular call to action or in groupings for the user to make a decision from.",
    type: "Action" as const,
    companyName: "ActiveCampaign" as const,
    link: "https://www.activecampaign.design/docs/components/button/camp-1",
    id: 145,
  },
  {
    name: "Card",
    description:
      "Cards collect and divide content into designated areas. Cards can be actionable themselves or have actionable elements within.\n",
    type: "Layout" as const,
    companyName: "ActiveCampaign" as const,
    link: "https://www.activecampaign.design/docs/components/card/camp-1",
    id: 146,
  },
  {
    name: "Checkbox",
    description:
      "Checkboxes allow the user to select one or more items from a list or set.\n\n",
    type: "Input" as const,
    companyName: "ActiveCampaign" as const,
    link: "https://www.activecampaign.design/docs/components/checkbox/camp-1",
    id: 147,
  },
  {
    name: "Chip",
    description:
      "Chips are text visually styled to differentiate and make it easy for users to visually parse and categorize their data. They can be used to identify statuses, categories, or other forms of metadata.\n\n",
    type: "Status" as const,
    companyName: "ActiveCampaign" as const,
    link: "https://www.activecampaign.design/docs/components/chip/camp-1",
    id: 148,
  },
  {
    name: "Datepicker",
    description:
      "The date picker allows users to enter a date or date range either through text input or choosing a date from a calendar.\n\n",
    type: "Input" as const,
    companyName: "ActiveCampaign" as const,
    link: "https://www.activecampaign.design/docs/components/date-picker/camp-1",
    id: 149,
  },
  {
    name: "Drawer",
    description:
      "Drawers are used to display context-sensitive actions and inform or shift focus without losing the user’s current state.\n",
    type: "Layout" as const,
    companyName: "ActiveCampaign" as const,
    link: "https://www.activecampaign.design/docs/components/drawer/camp-1",
    id: 150,
  },
  {
    name: "Dropdown",
    description:
      "Dropdowns are used to select between choices. Dropdown list items can have a variety of content, including text, avatars, icons, and brand logomarks.\n",
    type: "Input" as const,
    companyName: "ActiveCampaign" as const,
    link: "https://www.activecampaign.design/docs/components/dropdown/camp-1",
    id: 151,
  },
  {
    name: "Icon",
    description:
      "Icons are simple, visual elements that a user understands right away. They typically indicate action and help with cognitive recognition.\n\n",
    type: "Images" as const,
    companyName: "ActiveCampaign" as const,
    link: "https://www.activecampaign.design/docs/components/icon/camp-1",
    id: 152,
  },
  {
    name: "Form",
    description:
      "Form is not a traditional Camp component. It contains shared elements that need to be used across multiple form components (e.g., labels, helper text and fieldset). It is available to anyone as it is useful for bringing Camp consistency to forms.\n\n",
    type: "Input" as const,
    companyName: "ActiveCampaign" as const,
    link: "https://www.activecampaign.design/docs/components/form",
    id: 153,
  },
  {
    name: "Spinner",
    description:
      "Loading indicators are used when information takes an extended amount of time to process and appear on-screen.\n\n",
    type: "Loading" as const,
    companyName: "ActiveCampaign" as const,
    link: "https://www.activecampaign.design/docs/components/loading-indicator/camp-1",
    id: 154,
  },
  {
    name: "Modal",
    description:
      "Modals are commonly used to grab the user’s attention to inform or shift focus to a particular task or action, often interrupting or locking the UI until the user takes action.\n\n",
    type: "Overlays" as const,
    companyName: "ActiveCampaign" as const,
    link: "https://www.activecampaign.design/docs/components/modal/camp-1",
    id: 155,
  },
  {
    name: "Pagination",
    description:
      "Pagination breaks content into pages for easier wayfinding and lower information density within a list.\n\n",
    type: "Layout" as const,
    companyName: "ActiveCampaign" as const,
    link: "https://www.activecampaign.design/docs/components/pagination/camp-1",
    id: 156,
  },
  {
    name: "Tabs",
    description:
      "Tabs allow users to easily navigate between views while keeping the same context.\n\n",
    type: "Navigation" as const,
    companyName: "ActiveCampaign" as const,
    link: "https://www.activecampaign.design/docs/components/tabs/camp-1",
    id: 162,
  },
  {
    name: "Progress bar",
    description:
      "A Progress bar is a visual representation of progress toward a goal, metric, or quota. It communicates values like usage, success rates, or completion percentages in a quick and scannable way.\n\n",
    type: "Loading" as const,
    companyName: "ActiveCampaign" as const,
    link: "https://www.activecampaign.design/docs/components/progress-bar",
    id: 158,
  },
  {
    name: "Alert",
    description:
      "An alert gives people critical information they need right away.\n",
    type: "Overlays" as const,
    companyName: "Apple" as const,
    link: "https://developer.apple.com/design/human-interface-guidelines/alerts",
    id: 50,
  },
  {
    name: "Navigation",
    description:
      "A navigation bar provides a natural place to display a title that can help people orient themselves in your app or game, and it can also include controls that affect the content below it.",
    type: "Navigation" as const,
    companyName: "Apple" as const,
    link: "https://developer.apple.com/design/human-interface-guidelines/navigation-bars",
    id: 51,
  },
  {
    name: "Breadcrumbs",
    description:
      "A path control shows the file system path of a selected file or folder.\n",
    type: "Navigation" as const,
    companyName: "Apple" as const,
    link: "https://developer.apple.com/design/human-interface-guidelines/path-controls",
    id: 53,
  },
  {
    name: "Combo Box",
    description:
      "A Combo Box combines a text field with a pull-down button in a single control.\n",
    type: "Input" as const,
    companyName: "Apple" as const,
    link: "https://developer.apple.com/design/human-interface-guidelines/combo-boxes",
    id: 55,
  },
  {
    name: "Button Group",
    description:
      "A button group gives users access to frequently performed, related actions.\n",
    type: "Action" as const,
    companyName: "Atlassian" as const,
    link: "https://atlassian.design/components/button/button-group/examples",
    id: 18,
  },
  {
    name: "Datepicker",
    description:
      "A picker displays one or more scrollable lists of distinct values that people can choose from.\n",
    type: "Input" as const,
    companyName: "Apple" as const,
    link: "https://developer.apple.com/design/human-interface-guidelines/pickers",
    id: 56,
  },
  {
    name: "Radio Button",
    description:
      "A radio input allows users to select only one option from a number of choices. Radio is generally displayed in a radio group.\n",
    type: "Input" as const,
    companyName: "Atlassian" as const,
    link: "https://atlassian.design/components/radio/radio-group/examples",
    id: 37,
  },
  {
    name: "Badge",
    description:
      "A badge is a visual indicator for numeric values such as tallies and scores.\n",
    type: "Status" as const,
    companyName: "Atlassian" as const,
    link: "https://atlassian.design/components/badge/examples",
    id: 15,
  },
  {
    name: "Toggle",
    description:
      "A toggle is used to view or switch between enabled or disabled states.\n",
    type: "Action" as const,
    companyName: "Atlassian" as const,
    link: "https://atlassian.design/components/toggle/examples",
    id: 41,
  },
  {
    name: "Tabs",
    description:
      "Tabs are used to organize content by grouping similar information on the same page.",
    type: "Navigation" as const,
    companyName: "Atlassian" as const,
    link: "https://atlassian.design/components/tabs/examples",
    id: 42,
  },
  {
    name: "Tag",
    description:
      "A tag labels UI objects for quick recognition and navigation.",
    type: "Status" as const,
    companyName: "Atlassian" as const,
    link: "https://atlassian.design/components/tag/examples",
    id: 43,
  },
  {
    name: "Text area",
    description:
      "A text area lets users enter long form text which spans over multiple lines.",
    type: "Input" as const,
    companyName: "Atlassian" as const,
    link: "https://atlassian.design/components/textarea/examples",
    id: 44,
  },
  {
    name: "Text field",
    description:
      "A text field is an input that allows a user to write or edit text.",
    type: "Input" as const,
    companyName: "Atlassian" as const,
    link: "https://atlassian.design/components/textfield/examples",
    id: 45,
  },
  {
    name: "Tooltip",
    description:
      "A tooltip is a floating, non-actionable label used to explain a user interface element or feature.",
    type: "Overlays" as const,
    companyName: "Atlassian" as const,
    link: "https://atlassian.design/components/tooltip/examples",
    id: 46,
  },
  {
    name: "Table tree",
    description:
      "A table tree is an expandable table for showing nested hierarchies of information.\n",
    type: "Data" as const,
    companyName: "Atlassian" as const,
    link: "https://atlassian.design/components/table-tree/examples",
    id: 47,
  },
  {
    name: "Table",
    description:
      "A dynamic table displays rows of data with built-in pagination, sorting, and re-ordering functionality.\n",
    type: "Data" as const,
    companyName: "Atlassian" as const,
    link: "https://atlassian.design/components/dynamic-table/examples",
    id: 21,
  },
  {
    name: "Table",
    description:
      "A table or list can represent data that’s organized in groups or hierarchies, and it can support user interactions like selecting, adding, deleting, and reordering.",
    type: "Data" as const,
    companyName: "Apple" as const,
    link: "https://developer.apple.com/design/human-interface-guidelines/lists-and-tables",
    id: 49,
  },
  {
    name: "Menu",
    description:
      "A menu reveals its options when people interact with it, making it a space-efficient way to present commands in your app or game.\n",
    type: "Layout" as const,
    companyName: "Apple" as const,
    link: "https://developer.apple.com/design/human-interface-guidelines/menus",
    id: 58,
  },
  {
    name: "Navigation",
    description:
      "A tab bar lets people navigate between top-level sections of your app.\n",
    type: "Layout" as const,
    companyName: "Apple" as const,
    link: "https://developer.apple.com/design/human-interface-guidelines/tab-bars",
    id: 59,
  },
  {
    name: "Popover",
    description:
      "A popover is a transient view that appears above other content when people click or tap a control or interactive area.\n",
    type: "Overlays" as const,
    companyName: "Apple" as const,
    link: "https://developer.apple.com/design/human-interface-guidelines/popovers",
    id: 60,
  },
  {
    name: "Progress bar",
    description:
      "Progress indicators let people know that your app isn’t stalled while it loads content or performs lengthy operations.\n",
    type: "Loading" as const,
    companyName: "Apple" as const,
    link: "https://developer.apple.com/design/human-interface-guidelines/progress-indicators",
    id: 61,
  },
  {
    name: "Search",
    description:
      "A search field lets people search a collection of content for specific terms they enter.\n",
    type: "Loading" as const,
    companyName: "Apple" as const,
    link: "https://developer.apple.com/design/human-interface-guidelines/search-fields",
    id: 62,
  },
  {
    name: "Segmented control",
    description:
      "A segmented control is a linear set of two or more segments, each of which functions as a button.\n",
    type: "Navigation" as const,
    companyName: "Apple" as const,
    link: "https://developer.apple.com/design/human-interface-guidelines/segmented-controls",
    id: 63,
  },
  {
    name: "Sidebar",
    description:
      "A sidebar appears on the leading side of a view and lets people navigate between sections in your app or game.\n",
    type: "Navigation" as const,
    companyName: "Apple" as const,
    link: "https://developer.apple.com/design/human-interface-guidelines/sidebars",
    id: 64,
  },
  {
    name: "Slider",
    description:
      "A slider is a horizontal track with a control, called a thumb, that people can adjust between a minimum and maximum value.\n",
    type: "Input" as const,
    companyName: "Apple" as const,
    link: "https://developer.apple.com/design/human-interface-guidelines/sliders",
    id: 65,
  },
  {
    name: "Toggle",
    description:
      "A toggle lets people choose between a pair of opposing states, like on and off, using a different appearance to indicate each state.\n",
    type: "Action" as const,
    companyName: "Apple" as const,
    link: "https://developer.apple.com/design/human-interface-guidelines/toggles",
    id: 66,
  },
  {
    name: "Text area",
    description:
      "A text view displays multiline, styled text content, which can optionally be editable.",
    type: "Input" as const,
    companyName: "Apple" as const,
    link: "https://developer.apple.com/design/human-interface-guidelines/text-views",
    id: 67,
  },
  {
    name: "Text field",
    description:
      "A text field is a rectangular area in which people enter or edit small, specific pieces of text.\n",
    type: "Input" as const,
    companyName: "Apple" as const,
    link: "https://developer.apple.com/design/human-interface-guidelines/text-fields",
    id: 68,
  },
  {
    name: "Accordion",
    description:
      "Use expandable sections beneath relevant items in the interface to reduce page length. An example is advanced configurations in a form. All adjacent content will be pushed vertically down the page.\n",
    type: "Layout" as const,
    companyName: "Amazon" as const,
    link: "https://cloudscape.design/components/expandable-section/?tabId=playground",
    id: 69,
  },
  {
    name: "Alert banner",
    description:
      "When there are multiples of each sub-type, show all of a sub-type in order of urgency, before the next sub-type is displayed. For example, show all error alerts before displaying the first warning.\n\n",
    type: "Messaging" as const,
    companyName: "Amazon" as const,
    link: "https://cloudscape.design/components/alert/?tabId=playground",
    id: 70,
  },
  {
    name: "App bar",
    description:
      "A global navigation element for services that is consistent and persists across all service pages.\n\n",
    type: "Navigation" as const,
    companyName: "Amazon" as const,
    link: "https://cloudscape.design/components/top-navigation/",
    id: 71,
  },
  {
    name: "Autocomplete",
    description:
      "Autosuggest enables users to choose from a list of suggestions.\n\n",
    type: "Input" as const,
    companyName: "Amazon" as const,
    link: "https://cloudscape.design/components/autosuggest/?tabId=playground",
    id: 72,
  },
  {
    name: "Badge",
    description:
      "A small, color-coded visual element that contains letters or numbers, that is used to label, categorize, organize, or indicate severity of items.\n\n",
    type: "Status" as const,
    companyName: "Amazon" as const,
    link: "https://cloudscape.design/components/badge/?tabId=playground",
    id: 73,
  },
  {
    name: "Card",
    description:
      "In its basic usage, the cards component simply allows to display a list of items as a set of containers. ",
    type: "Action" as const,
    companyName: "Amazon" as const,
    link: "https://cloudscape.design/components/cards/?tabId=playground",
    id: 76,
  },
  {
    name: "Chip",
    description:
      "A set of compact representations of an individual item selected from a list.\n\n",
    type: "Status" as const,
    companyName: "Amazon" as const,
    link: "https://cloudscape.design/components/token-group/?tabId=playground",
    id: 77,
  },
  {
    name: "Code",
    description: "With the code editor, users can write and edit code.\n\n",
    type: "Messaging" as const,
    companyName: "Amazon" as const,
    link: "https://cloudscape.design/components/code-editor/?tabId=playground",
    id: 78,
  },
  {
    name: "Table",
    description:
      "Presents data in a two-dimensional table format, arranged in columns and rows in a rectangular form.\n\n",
    type: "Data" as const,
    companyName: "Amazon" as const,
    link: "https://cloudscape.design/components/table/?tabId=playground",
    id: 79,
  },
  {
    name: "Datepicker",
    description:
      "With the date picker, users can enter or choose a date value.\n\n",
    type: "Data" as const,
    companyName: "Amazon" as const,
    link: "https://cloudscape.design/components/date-picker/?tabId=playground",
    id: 80,
  },
  {
    name: "Empty",
    description:
      "An empty state occurs when users haven’t created a resource or have deleted all existing resources. A zero results state occurs when users have filtered and there are no matches.\n\n",
    type: "Data" as const,
    companyName: "Amazon" as const,
    link: "https://cloudscape.design/patterns/general/empty-states/",
    id: 81,
  },
  {
    name: "Dropdown",
    description:
      "With a button dropdown, you can group a set of actions under one button.\n\n",
    type: "Input" as const,
    companyName: "Amazon" as const,
    link: "https://cloudscape.design/components/button-dropdown/?tabId=playground",
    id: 82,
  },
  {
    name: "Filter Input",
    description:
      "With a text filter, users can enter text that’s used to match specific items in a collection.\n\n",
    type: "Input" as const,
    companyName: "Amazon" as const,
    link: "https://cloudscape.design/components/text-filter/?tabId=playground",
    id: 83,
  },
  {
    name: "Spinner",
    description:
      "A spinner is an animated spinning icon that lets users know content is being loaded.\n",
    type: "Loading" as const,
    companyName: "Atlassian" as const,
    link: "https://atlassian.design/components/spinner/examples",
    id: 36,
  },
  {
    name: "Breadcrumbs",
    description:
      "Displays a series of navigational links in a hierarchical list.\n\n",
    type: "Navigation" as const,
    companyName: "Amazon" as const,
    link: "https://cloudscape.design/components/breadcrumb-group/?tabId=playground",
    id: 74,
  },
  {
    name: "Form",
    description:
      "A section of a page that has interactive controls with which a user can submit information to a web server.\n\n",
    type: "Input" as const,
    companyName: "Amazon" as const,
    link: "https://cloudscape.design/components/form/?tabId=playground",
    id: 84,
  },
  {
    name: "Icon",
    description:
      "Display basic icons that match with Cloudscape's sizes, colors, and typography.\n\n",
    type: "Images" as const,
    companyName: "Amazon" as const,
    link: "https://cloudscape.design/components/icon/?tabId=playground",
    id: 85,
  },
  {
    name: "Link",
    description:
      "A link component is an anchor tag that defines a hyperlink, which a user can interact with to find out more information about a concept, task, or field.\n\n",
    type: "Navigation" as const,
    companyName: "Amazon" as const,
    link: "https://cloudscape.design/components/link/?tabId=playground",
    id: 86,
  },
  {
    name: "Modal",
    description:
      "A user interface element subordinate to an application's main window. It prevents interaction with the main page content, but keeps it visible with the modal as a child window in front of it.\n\n",
    type: "Overlays" as const,
    companyName: "Amazon" as const,
    link: "https://cloudscape.design/components/modal/?tabId=playground",
    id: 87,
  },
  {
    name: "Pagination",
    description:
      "Provides horizontal navigation between pages of a collection.\n\n",
    type: "Navigation" as const,
    companyName: "Amazon" as const,
    link: "https://cloudscape.design/components/pagination/?tabId=playground",
    id: 88,
  },
  {
    name: "Popover",
    description:
      "Provides on-demand contextual information about elements or events.\n\n",
    type: "Overlays" as const,
    companyName: "Amazon" as const,
    link: "https://cloudscape.design/components/popover/?tabId=playground",
    id: 89,
  },
  {
    name: "Progress bar",
    description:
      "Informs the user about the progress of an operation with a known duration.\n\n",
    type: "Loading" as const,
    companyName: "Amazon" as const,
    link: "https://cloudscape.design/components/progress-bar/?tabId=playground",
    id: 90,
  },
  {
    name: "Radio Button",
    description:
      "Radio group enable users to choose one option from a predefined set.\n\n",
    type: "Input" as const,
    companyName: "Amazon" as const,
    link: "https://cloudscape.design/components/radio-group/?tabId=playground",
    id: 101,
  },
  {
    name: "Segmented control",
    description:
      "With a segmented control, users can toggle between different ways of formatting a piece of content or data.\n\n",
    type: "Navigation" as const,
    companyName: "Amazon" as const,
    link: "https://cloudscape.design/components/segmented-control/?tabId=playground",
    id: 102,
  },
  {
    name: "Select",
    description:
      "Selects enable users to choose a single item from a list of items.\n\n",
    type: "Input" as const,
    companyName: "Amazon" as const,
    link: "https://cloudscape.design/components/select/?tabId=playground",
    id: 103,
  },
  {
    name: "Sidebar",
    description:
      "A list of navigational links that point to the pages within an application.\n\n",
    type: "Navigation" as const,
    companyName: "Amazon" as const,
    link: "https://cloudscape.design/components/side-navigation/?tabId=playground",
    id: 104,
  },
  {
    name: "Toggle",
    description:
      "Toggles enable users to turn an option on or off, and can result in an immediate change.\n\n",
    type: "Action" as const,
    companyName: "Amazon" as const,
    link: "https://cloudscape.design/components/toggle/?tabId=playground",
    id: 105,
  },
  {
    name: "Text area",
    description:
      "A form element that provides a multi-line, plain-text input control.\n\n",
    type: "Input" as const,
    companyName: "Amazon" as const,
    link: "https://cloudscape.design/components/textarea/?tabId=playground",
    id: 106,
  },
  {
    name: "Text field",
    description:
      "With the input control, users can input a single line of text.\n\n",
    type: "Input" as const,
    companyName: "Amazon" as const,
    link: "https://cloudscape.design/components/input/?tabId=playground",
    id: 107,
  },
  {
    name: "Action bar",
    description:
      "Action bars are used for single and bulk selection patterns, when a user needs to perform actions on either a single or multiple items at the same time.\n\n",
    type: "Action" as const,
    companyName: "Adobe" as const,
    link: "https://spectrum.adobe.com/page/action-bar/",
    id: 108,
  },
  {
    name: "Avatar",
    description:
      "An avatar is a thumbnail representation of an entity, such as a user or an organization.\n\n",
    type: "Messaging" as const,
    companyName: "Adobe" as const,
    link: "https://spectrum.adobe.com/page/avatar/",
    id: 110,
  },
  {
    name: "Badge",
    description:
      "Similar to status lights, badges are for showing a small amount of color-categorized metadata. They're ideal for getting a user's attention.",
    type: "Status" as const,
    companyName: "Adobe" as const,
    link: "https://spectrum.adobe.com/page/badge/",
    id: 111,
  },
  {
    name: "Tray",
    description:
      "Trays are containers that display transient content such as menus, options, additional actions, and more. They only exist on mobile experiences and are used for exposing types of content that may be too overwhelming for popovers.\n\n",
    type: "Overlays" as const,
    companyName: "Adobe" as const,
    link: "https://spectrum.adobe.com/page/tray/",
    id: 112,
  },
  {
    name: "Button Group",
    description:
      "A button group is a grouping of buttons whose actions are related to each other.\n\n",
    type: "Action" as const,
    companyName: "Adobe" as const,
    link: "https://spectrum.adobe.com/page/button-group/",
    id: 114,
  },
  {
    name: "Card",
    description:
      "Cards group information into flexible containers to let users to browse a collection of related items and actions. They show a taste of information and reveal more details upon interaction.",
    type: "Action" as const,
    companyName: "Adobe" as const,
    link: "https://spectrum.adobe.com/page/cards/",
    id: 115,
  },
  {
    name: "Checkbox",
    description:
      "Checkboxes allow users to select multiple items from a list of individual items, or to mark one individual item as selected.\n\n",
    type: "Input" as const,
    companyName: "Adobe" as const,
    link: "https://spectrum.adobe.com/page/checkbox/",
    id: 116,
  },
  {
    name: "Combo Box",
    description:
      "Combo Boxes combine a text entry with a picker menu, allowing users to filter longer lists to only the selections matching a query.\n\n\n",
    type: "Input" as const,
    companyName: "Adobe" as const,
    link: "https://spectrum.adobe.com/page/combo-box/",
    id: 117,
  },
  {
    name: "Table",
    description:
      "Tables are containers for displaying information. They allow users to quickly scan, sort, compare, and take action on large amounts of data.\n\n",
    type: "Data" as const,
    companyName: "Adobe" as const,
    link: "https://spectrum.adobe.com/page/table/",
    id: 118,
  },
  {
    name: "Help text",
    description:
      "Help text provides either an informative description or an error message that gives more context about what a user needs to input. It’s commonly used in forms.\n\n",
    type: "Messaging" as const,
    companyName: "Adobe" as const,
    link: "https://spectrum.adobe.com/page/help-text/",
    id: 120,
  },
  {
    name: "Label",
    description:
      "Field labels give context to the information that a user needs to input. They're commonly used in forms.\n\n",
    type: "Messaging" as const,
    companyName: "Adobe" as const,
    link: "https://spectrum.adobe.com/page/field-label/",
    id: 121,
  },
  {
    name: "Link",
    description:
      "Links allow users to navigate to a different location. They can be presented inside a paragraph or as standalone text.\n\n",
    type: "Messaging" as const,
    companyName: "Adobe" as const,
    link: "https://spectrum.adobe.com/page/link/",
    id: 123,
  },
  {
    name: "Spinner",
    description:
      "A compact, looped animation giving the user feedback that a process is currently running.\n\n",
    type: "Loading" as const,
    companyName: "Amazon" as const,
    link: "https://cloudscape.design/components/spinner/?tabId=playground",
    id: 100,
  },
  {
    name: "Menu",
    description:
      "Menus help users take actions, choose from a list of options, configure settings, and more. They can be placed in a transient container, like a popover or tray.\n\n",
    type: "Layout" as const,
    companyName: "Adobe" as const,
    link: "https://spectrum.adobe.com/page/menu/",
    id: 124,
  },
  {
    name: "Modal",
    description:
      "Alert dialogs display important information that users need to acknowledge. They appear over the interface and block further interactions until an action is selected.\n\n",
    type: "Overlays" as const,
    companyName: "Adobe" as const,
    link: "https://spectrum.adobe.com/page/alert-dialog/",
    id: 125,
  },
  {
    name: "Header",
    description:
      "Headers are containers attached to the top of a page that house product-wide or global actions and navigation, as well as user preferences and branding.\n\n",
    type: "Layout" as const,
    companyName: "Adobe" as const,
    link: "https://spectrum.adobe.com/page/headers/",
    id: 127,
  },
  {
    name: "Popover",
    description:
      "Contextual help shows a user extra information about the state of either an adjacent component or an entire view. It explains a high-level topic about an experience and can point users to more information elsewhere.\n\n\n",
    type: "Overlays" as const,
    companyName: "Adobe" as const,
    link: "https://spectrum.adobe.com/page/contextual-help/",
    id: 128,
  },
  {
    name: "Progress bar",
    description:
      "Progress bars show the progression of a system operation: downloading, uploading, processing, etc., in a visual way. They can represent either determinate or indeterminate progress.\n\n\n",
    type: "Loading" as const,
    companyName: "Adobe" as const,
    link: "https://spectrum.adobe.com/page/progress-bar/",
    id: 129,
  },
  {
    name: "Radio Button",
    description:
      "A radio group is a grouping of Radio Buttons that are related to each other.\n\n",
    type: "Input" as const,
    companyName: "Adobe" as const,
    link: "https://spectrum.adobe.com/page/radio-group/",
    id: 130,
  },
  {
    name: "Search",
    description:
      "A search field is used for searching and filtering items.\n\n",
    type: "Input" as const,
    companyName: "Adobe" as const,
    link: "https://spectrum.adobe.com/page/search-field/",
    id: 131,
  },
  {
    name: "Select",
    description:
      'Pickers (sometimes known as "dropdowns" or "selects") allow users to choose from a list of options in a limited space. The list of options can change based on the context.\n\n',
    type: "Input" as const,
    companyName: "Adobe" as const,
    link: "https://spectrum.adobe.com/page/picker/",
    id: 132,
  },
  {
    name: "Sidebar",
    description:
      "Side navigation lets users navigate the entire content of a product or a section. These can be used for a single level or a multi-level navigation.\n\n",
    type: "Navigation" as const,
    companyName: "Adobe" as const,
    link: "https://spectrum.adobe.com/page/side-navigation/",
    id: 133,
  },
  {
    name: "Slider",
    description:
      "Sliders allow users to quickly select a value within a range. They should be used when the upper and lower bounds to the range are invariable.\n\n",
    type: "Input" as const,
    companyName: "Adobe" as const,
    link: "https://spectrum.adobe.com/page/slider/",
    id: 134,
  },
  {
    name: "Toast",
    description:
      "Toasts display brief, temporary notifications. They're meant to be noticed without disrupting a user's experience or requiring an action to be taken.\n\n",
    type: "Overlays" as const,
    companyName: "Adobe" as const,
    link: "https://spectrum.adobe.com/page/toast/",
    id: 135,
  },
  {
    name: "Tabs",
    description:
      "Tabs organize content into multiple sections and allow users to navigate between them. The content under the set of tabs should be related and form a coherent unit.\n\n",
    type: "Navigation" as const,
    companyName: "Adobe" as const,
    link: "https://spectrum.adobe.com/page/tabs/",
    id: 136,
  },
  {
    name: "Tag",
    description:
      "Tags allow users to categorize content. They can represent keywords or people, and are grouped to describe an item or a search request.\n\n",
    type: "Status" as const,
    companyName: "Adobe" as const,
    link: "https://spectrum.adobe.com/page/tag/",
    id: 137,
  },
  {
    name: "Text area",
    description:
      "A text area lets a user input a longer amount of text than a standard text field. It can include all of the standard validation options supported by the text field component.\n\n\n",
    type: "Input" as const,
    companyName: "Adobe" as const,
    link: "https://spectrum.adobe.com/page/text-area/",
    id: 138,
  },
  {
    name: "Text field",
    description:
      "Text fields allow users to input custom text entries with a keyboard. Various options can be shown with the field to communicate the input requirements.\n\n",
    type: "Input" as const,
    companyName: "Adobe" as const,
    link: "https://spectrum.adobe.com/page/text-field/",
    id: 139,
  },
  {
    name: "Tooltip",
    description:
      "A tooltip is a floating, non-actionable label used to explain a user interface element or feature.",
    type: "Overlays" as const,
    companyName: "Adobe" as const,
    link: "https://spectrum.adobe.com/page/tooltip/",
    id: 140,
  },
  {
    name: "Divider",
    description:
      "Dividers bring clarity to a layout by grouping and dividing content in close proximity. They can also be used to establish rhythm and hierarchy.\n\n",
    type: "Layout" as const,
    companyName: "Adobe" as const,
    link: "https://spectrum.adobe.com/page/divider/",
    id: 119,
  },
  {
    name: "Navigation bar",
    description:
      "Bottom navigation is a top-level navigation control for Android apps.\n\n",
    type: "Layout" as const,
    companyName: "Adobe" as const,
    link: "https://spectrum.adobe.com/page/bottom-navigation-android/",
    id: 126,
  },
  {
    name: "Button",
    description: "Allows users to initiate actions in the user interface.\n\n",
    type: "Action" as const,
    companyName: "Amazon" as const,
    link: "https://cloudscape.design/components/button/?tabId=playground",
    id: 75,
  },
  {
    name: "Button",
    description:
      "Action buttons allow users to perform an action or mark a selection. They’re used for similar, task-based options within a workflow, and are ideal for interfaces where buttons aren’t meant to draw a lot of attention.\n\n",
    type: "Action" as const,
    companyName: "Adobe" as const,
    link: "https://spectrum.adobe.com/page/action-button/",
    id: 109,
  },
  {
    name: "Button",
    description:
      "Versatile and highly customizable, buttons give people simple, familiar ways to do tasks in your app. ",
    type: "Action" as const,
    companyName: "Apple" as const,
    link: "https://developer.apple.com/design/human-interface-guidelines/buttons",
    id: 54,
  },
  {
    name: "Breadcrumbs",
    description:
      "Breadcrumbs show hierarchy and navigational context for a user’s location within an app.\n\n\n",
    type: "Navigation" as const,
    companyName: "Adobe" as const,
    link: "https://spectrum.adobe.com/page/breadcrumbs/",
    id: 113,
  },
  {
    name: "Tooltip",
    description:
      "A tooltip is a small, informative text box that appears when a user hovers over or focuses on an element, such as a button, icon, or hyperlink. Tooltips provide contextual information or additional details to help users understand the purpose or functionality of an element without cluttering the user interface.",
    type: "Overlays" as const,
    companyName: "Brainly" as const,
    link: "https://design.brainly.com/8adfd5f36/p/72cd79-tooltip",
    id: 11,
  },
  {
    name: "Alert banner",
    description:
      "A section message is used to alert users to a particular section of the screen.\n",
    type: "Messaging" as const,
    companyName: "Atlassian" as const,
    link: "https://atlassian.design/components/section-message/examples",
    id: 12,
  },
  {
    name: "Navigation",
    description: "A horizontal navigation component for Atlassian products.\n",
    type: "Navigation" as const,
    companyName: "Atlassian" as const,
    link: "https://atlassian.design/components/atlassian-navigation/examples",
    id: 13,
  },
  {
    name: "Avatar",
    description: "An avatar is a visual representation of a user or entity.\n",
    type: "Images" as const,
    companyName: "Atlassian" as const,
    link: "https://atlassian.design/components/avatar/examples",
    id: 14,
  },
  {
    name: "Breadcrumbs",
    description:
      "Breadcrumbs are a navigation system used to show a user's location in a site or app.\n",
    type: "Navigation" as const,
    companyName: "Atlassian" as const,
    link: "https://atlassian.design/components/breadcrumbs/examples",
    id: 16,
  },
  {
    name: "Checkbox",
    description:
      "A checkbox is an input control that allows a user to select one or more options from a number of choices.\n",
    type: "Input" as const,
    companyName: "Atlassian" as const,
    link: "https://atlassian.design/components/checkbox/examples",
    id: 19,
  },
  {
    name: "Code",
    description:
      "Code highlights short strings of code snippets inline with body text.\n",
    type: "Messaging" as const,
    companyName: "Atlassian" as const,
    link: "https://atlassian.design/components/code/examples",
    id: 20,
  },
  {
    name: "Dropdown",
    description:
      "A dropdown menu displays a list of actions or options to a user.\n",
    type: "Input" as const,
    companyName: "Atlassian" as const,
    link: "https://atlassian.design/components/dropdown-menu/examples",
    id: 24,
  },
  {
    name: "Drawer",
    description:
      "A drawer is a panel that slides in from the left side of the screen.\n",
    type: "Overlays" as const,
    companyName: "Atlassian" as const,
    link: "https://atlassian.design/components/drawer/examples",
    id: 23,
  },
  {
    name: "Button",
    description:
      "A button triggers an event or action. They let users know what will happen next.\n",
    type: "Action" as const,
    companyName: "Atlassian" as const,
    link: "https://atlassian.design/components/button/examples",
    id: 17,
  },
  {
    name: "Empty",
    description:
      "An empty state appears when there is no data to display and describes what the user can do next.\n",
    type: "Status" as const,
    companyName: "Atlassian" as const,
    link: "https://atlassian.design/components/empty-state/examples",
    id: 25,
  },
  {
    name: "List",
    description:
      "A list of options to help users navigate, or perform actions.\n",
    type: "Navigation" as const,
    companyName: "Atlassian" as const,
    link: "https://atlassian.design/components/menu/examples",
    id: 29,
  },
  {
    name: "Inline message",
    description:
      "An inline message lets users know when important information is available or when an action is required.\n",
    type: "Messaging" as const,
    companyName: "Atlassian" as const,
    link: "https://atlassian.design/components/inline-message/examples",
    id: 28,
  },
  {
    name: "Header",
    description:
      "A page header defines the top of a page. It contains a title and can be optionally combined with breadcrumbs buttons, search, and filters.\n",
    type: "Layout" as const,
    companyName: "Atlassian" as const,
    link: "https://atlassian.design/components/page-header/examples",
    id: 31,
  },
  {
    name: "Pagination",
    description:
      "Pagination allows you to divide large amounts of content into smaller chunks across multiple pages.\n",
    type: "Navigation" as const,
    companyName: "Atlassian" as const,
    link: "https://atlassian.design/components/pagination/examples",
    id: 32,
  },
  {
    name: "Popup",
    description: "A popup displays brief content in an overlay.\n",
    type: "Overlays" as const,
    companyName: "Atlassian" as const,
    link: "https://atlassian.design/components/popup/examples",
    id: 35,
  },
  {
    name: "Select",
    description:
      "Select allows users to make a single selection or multiple selections from a list of options.\n",
    type: "Input" as const,
    companyName: "Atlassian" as const,
    link: "https://atlassian.design/components/select/examples",
    id: 38,
  },
  {
    name: "Sidebar",
    description:
      "A highly composable side navigation component that supports nested views.\n",
    type: "Layout" as const,
    companyName: "Atlassian" as const,
    link: "https://atlassian.design/components/side-navigation/examples",
    id: 39,
  },
  {
    name: "Range",
    description:
      "A highly composable side navigation component that supports nested views.\n",
    type: "Input" as const,
    companyName: "Atlassian" as const,
    link: "https://atlassian.design/components/range/examples",
    id: 40,
  },
  {
    name: "Progress bar",
    description:
      "A Progress bar communicates the status of a system process.\n",
    type: "Loading" as const,
    companyName: "Atlassian" as const,
    link: "https://atlassian.design/components/progress-bar/examples",
    id: 34,
  },
  {
    name: "Datepicker",
    description: "A date picker allows the user to select a particular date.\n",
    type: "Input" as const,
    companyName: "Atlassian" as const,
    link: "https://atlassian.design/components/datetime-picker/examples",
    id: 22,
  },
  {
    name: "Icon",
    description:
      "An icon is a symbol representing a command, device, directory, or common action.\n",
    type: "Images" as const,
    companyName: "Atlassian" as const,
    link: "https://atlassian.design/components/icon/icon-explorer",
    id: 27,
  },
  {
    name: "Modal",
    description:
      "A modal dialog displays content that requires user interaction, in a layer above the page.\n",
    type: "Overlays" as const,
    companyName: "Atlassian" as const,
    link: "https://atlassian.design/components/modal-dialog/examples",
    id: 30,
  },
  {
    name: "Form",
    description:
      "A form is a group of related fields. You can customize the fields with components such as text field, range field, and checkbox field. You can also pass in default values. Submitting the form calls a callback function.",
    type: "Form" as const,
    companyName: "Atlassian" as const,
    link: "https://atlassian.design/components/form/examples",
    id: 26,
  },
  {
    name: "Toolbar",
    description:
      "A toolbar provides convenient access to frequently used commands and controls that perform actions relevant to the current view.\n",
    type: "Layout" as const,
    companyName: "Apple" as const,
    link: "https://developer.apple.com/design/human-interface-guidelines/toolbars",
    id: 48,
  },
  {
    name: "Toast",
    description:
      "Are temporary notifications that appear at the bottom of the interface. They are meant to provide quick feedback on the outcome of a user action without disrupting a user's experience.",
    type: "Overlays" as const,
    companyName: "Brainly" as const,
    link: "https://design.brainly.com/8adfd5f36/p/98ac3d-toast",
    id: 10,
  },
  {
    name: "Select",
    description:
      "The select menu enables users to choose from a pre-defined set of options displayed on a popup.",
    type: "Input" as const,
    companyName: "Brainly" as const,
    link: "https://design.brainly.com/8adfd5f36/p/95f057-select-menu",
    id: 9,
  },
  {
    name: "Progress bar",
    description:
      "Progress bar is a visual element that shows the current step or stage of a multi-step process. Progress bar can be used to indicate the status of the submission process and to provide a sense of how much longer the task will take to complete.",
    type: "Loading" as const,
    companyName: "Brainly" as const,
    link: "https://design.brainly.com/8adfd5f36/p/98d538-progress-bar",
    id: 8,
  },
  {
    name: "Popover",
    description:
      "Popovers are interactive overlays that extend particular options, like the context menu, when the user clicks on the button. They don’t prevent users from interacting with another part of the application at a certain moment.",
    type: "Overlays" as const,
    companyName: "Brainly" as const,
    link: "https://design.brainly.com/8adfd5f36/p/71f1d8-popover",
    id: 7,
  },
  {
    name: "Dialog",
    description:
      "Dialogs are overlays that prevents users from interacting with other part of application at certain moment. Because it’s bringing all attention from visitors and focusing it on one specific part of product - it should be used with care and thoughtfully.",
    type: "Overlays" as const,
    companyName: "Brainly" as const,
    link: "https://design.brainly.com/8adfd5f36/p/23a1e2-dialog",
    id: 6,
  },
  {
    name: "Chip",
    description:
      "Chip is a small, interactive component used to represent information or actions. It allows users to make selections or filter content and occurs in a group of multiple interactive elements.",
    type: "Status" as const,
    companyName: "Brainly" as const,
    link: "https://design.brainly.com/8adfd5f36/p/59471e-chip",
    id: 5,
  },
  {
    name: "Card",
    description:
      "Card component is a container for displaying information in a visually appealing and organized manner. The component can be adapted to include a checkbox function or radio function. The Card component can be used in a variety of situations, but generally it's a good idea to use it when you want to group related content or actions together in a visually distinct way.",
    type: "Layout" as const,
    companyName: "Brainly" as const,
    link: "https://design.brainly.com/8adfd5f36/p/4842f2-card",
    id: 4,
  },
  {
    name: "Label",
    description:
      "Labels display relative information of categorised data. They help user navigate throughout the page by providing overview of bigger element next to them.",
    type: "Status" as const,
    companyName: "Brainly" as const,
    link: "https://design.brainly.com/8adfd5f36/p/75770e-label",
    id: 3,
  },
  {
    name: "Button",
    description:
      "Buttons allow users to perform an action. They have multiple styles for different needs, and they can be used to call attention of the user.",
    type: "Action" as const,
    companyName: "Brainly" as const,
    link: "https://design.brainly.com/8adfd5f36/p/10c2a5-button",
    id: 2,
  },
  {
    name: "Button",
    description:
      "Button is a reusable, interactive UI element that triggers a specific action when clicked. As a fundamental element of user interaction, it serves as an imperative tool for navigation, form submission, and functionality initiation.",
    type: "Action" as const,
    companyName: "Google" as const,
    link: "https://m3.material.io/components/all-buttons",
    id: 200,
  },
  {
    name: "Checkbox",
    description:
      "Checkbox provides a visual representation of a binary choice, allowing users to choose between multiple options or toggle a single option on or off.",
    type: "Input" as const,
    companyName: "Google" as const,
    link: "https://m3.material.io/components/checkbox/overview",
    id: 201,
  },
  {
    name: "Chip",
    description:
      "Chips is a compact, interactive element used to represent an input, attribute, or action. Chips serve various purposes such as allowing users to enter information, make selections, filter content, or trigger actions.",
    type: "Status" as const,
    companyName: "Google" as const,
    link: "https://m3.material.io/components/chips/overview",
    id: 202,
  },
  {
    name: "Cards",
    description:
      "Cards serves as a universal container that holds content and actions related to a specific topic or subject. The purpose of using cards is to group information, allowing users to browse through a collection of related items or actions.",
    type: "Layout" as const,
    companyName: "Google" as const,
    link: "https://m3.material.io/components/cards/overview",
    id: 203,
  },
  {
    name: "Datepicker",
    description:
      "Date picker component allows users to select dates, and in some cases, time, in a standardized and intuitive manner. It provides a visual, interactive calendar interface, eliminating the possibility of erroneous date formatting and ensuring a smooth, user-friendly experience.",
    type: "Input" as const,
    companyName: "Google" as const,
    link: "https://m3.material.io/components/date-pickers/overview",
    id: 204,
  },
  {
    name: "Dialog",
    description:
      "Dialog is an interactive modal window that overlays the main content of a page. This component comes when a user action requires additional input or confirmation, delivering these scenarios without navigating away from the current context.",
    type: "Overlays" as const,
    companyName: "Google" as const,
    link: "https://m3.material.io/components/dialogs/overview",
    id: 205,
  },
  {
    name: "Divider",
    description:
      "Divider component is typically a line or space and can be oriented horizontally or vertically, depending on the layout. Used to create clear distinctions between groups of related content, improving readability and helping users better understand the information hierarchy on the page.",
    type: "Layout" as const,
    companyName: "Google" as const,
    link: "https://m3.material.io/components/divider/overview",
    id: 206,
  },
  {
    name: "Menu",
    description:
      "Menus serve as a space-efficient solution for presenting an array of choices, enabling users to execute actions, configure settings, or select from various options within a transient container.",
    type: "Layout" as const,
    companyName: "Google" as const,
    link: "https://m3.material.io/components/menus/overview",
    id: 207,
  },
  {
    name: "Navigation bar",
    description:
      "Navigation bar enabling effortless user interaction by facilitating smooth transitions between top-level destinations in an app. Navigation bar is characterized by its ease of reach and the use of icons and text labels to represent different sections.",
    type: "Navigation" as const,
    companyName: "Google" as const,
    link: "https://m3.material.io/components/navigation-bar/overview",
    id: 208,
  },
  {
    name: "Tabs",
    description:
      "Tabs is an interactive UI element that enables users to switch between different views or subsections of content within the same context.",
    type: "Navigation" as const,
    companyName: "Google" as const,
    link: "https://m3.material.io/components/tabs/overview",
    id: 209,
  },
  {
    name: "Sidebar",
    description:
      "Sidebar is a navigational panel often used for seamless, ergonomic navigation within an app interface. It's typically used to house secondary actions, additional information, or a sub-navigation menu related to the active page or section.",
    type: "Navigation" as const,
    companyName: "Google" as const,
    link: "https://m3.material.io/components/navigation-drawer/overview",
    id: 210,
  },
  {
    name: "Text field",
    description:
      "Text field allows users to input and edit a single line of plain text. It's an essential element in forms, enabling users to provide information like their name, email, password, and more.",
    type: "Input" as const,
    companyName: "Google" as const,
    link: "https://m3.material.io/components/text-fields/overview",
    id: 211,
  },
  {
    name: "Tooltip",
    description:
      "Tooltip is a text label that acts as an informational aid by providing explanations or context about the function of a user interface element. It appears when users hover over, focus on, or touch an element, such as an icon, image, hyperlink, or text.",
    type: "Overlays" as const,
    companyName: "Google" as const,
    link: "https://m3.material.io/components/tooltips/overview",
    id: 212,
  },
  {
    name: "Badge",
    description:
      "Badge is used to communicate status, notification count, or attribute labels. These are typically a circular or pill-shaped element with a number or short text, often overlaid on an icon or interface element.",
    type: "Status" as const,
    companyName: "Google" as const,
    link: "https://m3.material.io/components/badges/overview",
    id: 213,
  },
  {
    name: "List",
    description:
      "Is a specialized list that offers a series of interactive options or commands for users to choose from. Each item in the Action list typically represents a different action that a user can perform, often related to a specific context or object within the application.",
    type: "Navigation" as const,
    companyName: "Google" as const,
    link: "https://m3.material.io/components/lists/overview",
    id: 214,
  },
  {
    name: "App bar",
    description:
      "App bar is a horizontal bar located at the top of an application interface. It serves as the primary navigation header and typically contains elements like the application logo, page title, navigation links, and essential actions.",
    type: "Navigation" as const,
    companyName: "Google" as const,
    link: "https://m3.material.io/components/app-bars/overview",
    id: 215,
  },
  {
    name: "Bottom sheet",
    description:
      "Bottom sheet is a surface that contains additional content and is anchored to the bottom of the screen. Designed primarily for mobile experiences, bottom sheets display supplementary information that complements the primary content on the screen.",
    type: "Overlays" as const,
    companyName: "Google" as const,
    link: "https://m3.material.io/components/bottom-sheets/overview",
    id: 216,
  },
  {
    name: "Radio button",
    description:
      "Radio button is a visual control element used to allow users to make a single selection from a predefined set of mutually exclusive options. It is typically represented as a small circle, which is filled or highlighted when selected.",
    type: "Input" as const,
    companyName: "Google" as const,
    link: "https://m3.material.io/components/radio-button/overview",
    id: 217,
  },
  {
    name: "Progress indicator",
    description:
      "Progress indicator is a visual indicator used to signify an ongoing operation that doesn't have a defined duration. Progress indicator reduces user uncertainty during wait times, providing reassurance that the system is working as expected.",
    type: "Loading" as const,
    companyName: "Google" as const,
    link: "https://m3.material.io/components/progress-indicators/overview",
    id: 218,
  },
  {
    name: "Search",
    description:
      "Search is an interactive interface element that allows users to query and retrieve specific data from a larger dataset bypassing traditional navigation. Typically consists of a text field and button that initiates the search and may include auto-suggestions, recent searches, or voice search.",
    type: "Input" as const,
    companyName: "Google" as const,
    link: "https://m3.material.io/components/search/overview",
    id: 219,
  },
  {
    name: "Slider",
    description:
      "Slider is an interactive UI element that allows users to select a single value or a range of values from a continuum. Usually designed as a horizontal track with a draggable handle, sliders are an intuitive and efficient way to adjust settings or specify a quantity within a defined range.",
    type: "Input" as const,
    companyName: "Google" as const,
    link: "https://m3.material.io/components/sliders/overview",
    id: 220,
  },
  {
    name: "Side sheets",
    description:
      "Standard side sheets are supplementary surfaces used mostly in medium to expanded window sizes, like tablet and desktop. They provide a consistent and predictable surface for contextual actions and information.",
    type: "Overlays" as const,
    companyName: "Google" as const,
    link: "https://m3.material.io/components/side-sheets/guidelines",
    id: 221,
  },
  {
    name: "Switch",
    description:
      "Switch is a toggle control that allows users to turn a single option on or off. Switch component is commonly used for binary settings, such as enabling or disabling features or modes.",
    type: "Input" as const,
    companyName: "Google" as const,
    link: "https://m3.material.io/components/switch/overview",
    id: 222,
  },
  {
    name: "Action Bar",
    description:
      "A collection of horizontally aligned IconButtons. The IconButtons can be split into groups by adding a divider. When there is not enough space, IconButtons that don't fit will be added to an overflow menu.",
    type: "Action" as const,
    companyName: "GitHub" as const,
    link: "https://primer.style/product/components/action-bar/",
    id: 300,
  },
  {
    name: "Banner",
    description:
      "Banner is a powerful communication tool used to display important messages prominently across the user interface. These messages can range from critical system-wide issues, such as errors or warnings, to informational or success messages.",
    type: "Messaging" as const,
    companyName: "GitHub" as const,
    link: "https://primer.style/product/components/banner/",
    id: 301,
  },
  {
    name: "Checkbox",
    description:
      "Checkbox provides a visual representation of a binary choice, allowing users to choose between multiple options or toggle a single option on or off. This component enhances usability and provides a straightforward, intuitive means of user input.",
    type: "Input" as const,
    companyName: "GitHub" as const,
    link: "https://primer.style/product/components/checkbox/",
    id: 302,
  },
  {
    name: "Avatar",
    description:
      "Avatar is a pre-designed element used to identify users or entities in a user interface. Avatars can take the form of an image, initials, or an icon, providing a visual connection to the user.",
    type: "Images" as const,
    companyName: "GitHub" as const,
    link: "https://primer.style/product/components/avatar/",
    id: 303,
  },
  {
    name: "Badge",
    description:
      "Used to communicate status, notification count, or attribute labels. These are typically a circular or pill-shaped element with a number or short text, often overlaid on an icon or interface element. Badges are commonly used to draw attention to updates, or to signal unread messages or notifications.",
    type: "Status" as const,
    companyName: "GitHub" as const,
    link: "https://primer.style/product/components/counter-label/",
    id: 304,
  },
  {
    name: "Breadcrumbs",
    description:
      "Breadcrumbs display the current page or context within the site, allowing them to navigate different levels of the hierarchy. By visually indicating the user's position, Breadcrumbs allow for easy navigation back through the levels or categories.",
    type: "Navigation" as const,
    companyName: "GitHub" as const,
    link: "https://primer.style/product/components/breadcrumbs/",
    id: 305,
  },
  {
    name: "Button",
    description:
      "Button is used to initiate actions on a page or form. Consistent design and implementation of buttons ensure intuitive user experience, reducing cognitive load.",
    type: "Action" as const,
    companyName: "GitHub" as const,
    link: "https://primer.style/product/components/button/",
    id: 306,
  },
  {
    name: "Button Group",
    description:
      "Button group encompasses a cohesive set of actions, aiming to provide users with swift and convenient access to closely related, frequently performed tasks.",
    type: "Action" as const,
    companyName: "GitHub" as const,
    link: "https://primer.style/product/components/button-group/",
    id: 307,
  },
  {
    name: "Token",
    description:
      "Token is a compact representation of an object, and is typically used to show a collection of related metadata. Tokens are typically used in groups, either as read-only labels or for data entry.",
    type: "Status" as const,
    companyName: "GitHub" as const,
    link: "https://primer.style/product/components/token/",
    id: 308,
  },
  {
    name: "Data Table",
    description:
      "Data table is a robust, structured way to present large amounts of information. It allows data to be organized in rows and columns, offering clear visibility and easy interpretation of complex datasets.",
    type: "Data" as const,
    companyName: "GitHub" as const,
    link: "https://primer.style/product/components/data-table/",
    id: 309,
  },
  {
    name: "Dialog",
    description:
      "Dialog is a floating surface used to display transient content such as confirmation actions, selection options, and more.",
    type: "Overlays" as const,
    companyName: "GitHub" as const,
    link: "https://primer.style/product/components/dialog/",
    id: 310,
  },
  {
    name: "Label",
    description:
      "Label is a text-based element used to identify an input field or any user interface object. It provides clear, concise descriptions of the corresponding field's purpose, thus guiding users to input appropriate data.",
    type: "Status" as const,
    companyName: "GitHub" as const,
    link: "https://primer.style/product/components/label/",
    id: 311,
  },
  {
    name: "Autocomplete",
    description:
      "Autocomplete is an interactive UI element that allows users to quickly filter through a list of options and pick one or more values for a field. Is particularly useful when the range of possible entries is large or known, such as entering location names, tagging categories, or even navigating large datasets.",
    type: "Input" as const,
    companyName: "GitHub" as const,
    link: "https://primer.style/product/components/autocomplete/",
    id: 312,
  },
];
export default initialComponentData;
