const initialComponentImages = [
  {
    name: "Accordion",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370838/components/q7zmxjo2qsuqr0pyg2qj.png",
  },
  {
    name: "Action bar",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370838/components/ocuyvkjl4fascvo2vfzw.png",
  },
  {
    name: "Alert banner", // This is the same as Alert banner
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370839/components/zpi8t69ctrnnps3dk2cm.png",
  },
  {
    name: "Alert", // This is the same as Alert
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370839/components/zpi8t69ctrnnps3dk2cm.png",
  },
  {
    name: "App bar", // This is the same as Alert
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370839/components/zpi8t69ctrnnps3dk2cm.png",
  },
  {
    name: "Autocomplete",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370839/components/rl26g8vacsqvfmjjjbgs.png",
  },
  {
    name: "Avatar",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370839/components/xnwuuhdy2ttb9vmiywaf.png",
  },
  {
    name: "Badge",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370839/components/fvhwztetck9xccskkio2.png",
  },
  {
    name: "Breadcrumbs",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370839/components/i5ejvcupzzh8kt6v8adt.png",
  },
  {
    name: "Button Group",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370839/components/q3yqyzlvpjv3pwvrcoua.png",
  },
  {
    name: "Button",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370839/components/zhmx1ejxjwnusn7yhjsv.png",
  },
  {
    name: "Card",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370839/components/pgxlg6pqz1yzlvbjzrsj.png",
  },
  {
    name: "Chip",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370839/components/hk5k48di56cnx3z4tfeo.png",
  },
  {
    name: "Code",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370840/components/d5tuvpxkp9aabbavnlzu.png",
  },
  {
    name: "Combo Box",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370843/components/rtbj58x08u3s0c2ghqew.png",
  },
  {
    name: "Datepicker",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370840/components/nyweuqk2h1shuo5uc42s.png",
  },
  {
    name: "Dialog",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370840/components/sdkhsgex6tqm36kpljoy.png",
  },
  {
    name: "Divider",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370840/components/kj5pg4fsztea5va2gndp.png",
  },
  {
    name: "Drawer",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370840/components/lodopfpeop6hoepmcmis.png",
  },
  {
    name: "Dropdown",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370840/components/hubf4vz7cox3pdv3n1sy.png",
  },
  {
    name: "Empty",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370840/components/hw8a9drnvjk1ijelnuiu.png",
  },
  {
    name: "Filter Input",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370840/components/qrnkcwzzcnvxqcwi72os.png",
  },
  {
    name: "Form",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370840/components/d5kzlmapuye4wjfuycbu.png",
  },
  {
    name: "Header",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370840/components/lvnmwko0lznymr8mqjjs.png",
  },
  {
    name: "Help text",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370841/components/grbsbctn0ceqho4nhsf3.png",
  },
  {
    name: "Icon",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370841/components/minex0a7q8hugi5chrus.png",
  },
  {
    name: "Inline message",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370841/components/eoq6smyxv7mfip3dejrv.png",
  },
  {
    name: "Label",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370841/components/jjfutqqilr9mpbfgloqm.png",
  },
  {
    name: "Link",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370841/components/ipjfzdeff4ga3r4q2aqj.png",
  },
  {
    name: "List",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370842/components/v4jyyz0edfjcwnr1ntvu.png",
  },
  {
    name: "Menu",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370842/components/inufcwd70iecasrqupcm.png",
  },
  {
    name: "Modal",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370842/components/mrgfke0akazi8brmnlfq.png",
  },
  {
    name: "Navigation bar",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370842/components/uuquj2of9zduprybjg2o.png",
  },
  {
    name: "Navigation",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370842/components/avnmfb39jbqgi5wdghhj.png",
  },
  {
    name: "Pagination",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370842/components/h1etyctbzsl05xzrfvcl.png",
  },
  {
    name: "Popover",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370842/components/qrexwbgswsab2rgptb4o.png",
  },
  {
    name: "Popup",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370842/components/flzfgbxptzswfvrilfhr.png",
  },
  {
    name: "Progress bar",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370843/components/v0r0nhngizkfjcexyp2f.png",
  },
  {
    name: "Radio Button",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370843/components/rtbj58x08u3s0c2ghqew.png",
  },
  {
    name: "Range",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370843/components/wlwfxhjy6ktcfycj8d2i.png",
  },
  {
    name: "Search",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370843/components/ktqrqat7dgi12dtsrauu.png",
  },
  {
    name: "Segmented control",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370843/components/jxioyrr94cyxzm56xxrw.png",
  },
  {
    name: "Select",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370843/components/sckgbgrymwgd7orprmvu.png",
  },
  {
    name: "Sidebar",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370843/components/yyk15irgp5anqxeq97q4.png",
  },
  {
    name: "Slider",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370843/components/wlwfxhjy6ktcfycj8d2i.png",
  },
  {
    name: "Spinner",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370844/components/s8hhvohfysqlevwnbjot.png",
  },
  {
    name: "Table tree",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370844/components/qj40kgdubqvi2mxlto7c.png",
  },
  {
    name: "Table",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370844/components/kyoow9quhi301jzjgjzf.png",
  },
  {
    name: "Tabs",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370844/components/sfmct3bxivzbvrrtkk9l.png",
  },
  {
    name: "Tag",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370844/components/osvi4wfvdblgpq6pommw.png",
  },
  {
    name: "Text area",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370845/components/q5h3zhxwbhed9i5g4pte.png",
  },
  {
    name: "Text field",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370845/components/i30tsupn0wve2s89pde9.png",
  },
  {
    name: "Toast",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370845/components/hxdvzcpeov9xjiszf25f.png",
  },
  {
    name: "Toggle",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370845/components/gqmvfhamowgudhsqkka1.png",
  },
  {
    name: "Toolbar",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370845/components/jlhpxjicvvlaxoyxu2bs.png",
  },
  {
    name: "Tooltip",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370846/components/okiwzcqmcxgrsxyy8bug.png",
  },
  {
    name: "Tray",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370846/components/wsxcypskdft0gfiyalty.png",
  },
  {
    name: "Checkbox",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370839/components/socfpi2x6saztbek1q1u.png",
  },
  {
    name: "Bottom sheet",
    url: "https://res.cloudinary.com/archikola/image/upload/v1772502154/components/wmjljz89lbrobzipvibq.png",
  },
  {
    name: "Cards",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370839/components/pgxlg6pqz1yzlvbjzrsj.png",
  },
  {
    name: "Progress indicator",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370843/components/v0r0nhngizkfjcexyp2f.png",
  },
  {
    name: "Side sheets",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370840/components/lodopfpeop6hoepmcmis.png",
  },
  {
    name: "Switch",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370845/components/gqmvfhamowgudhsqkka1.png",
  },
  {
    name: "Token",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370839/components/hk5k48di56cnx3z4tfeo.png",
  },
  {
    name: "Data Table",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370844/components/kyoow9quhi301jzjgjzf.png",
  },
  {
    name: "Banner",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370839/components/zpi8t69ctrnnps3dk2cm.png",
  },
  {
    name: "Radio button",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370843/components/rtbj58x08u3s0c2ghqew.png",
  },
  {
    name: "Action Bar",
    url: "https://res.cloudinary.com/archikola/image/upload/v1771370838/components/ocuyvkjl4fascvo2vfzw.png",
  },
];

export default initialComponentImages;
