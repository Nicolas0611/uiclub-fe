/* eslint-disable import/no-anonymous-default-export */
export default {
  DESIGN_LIBRARIES: {
    DESIGN_SYSTEMS: "design-libraries/design-systems/",
    DESIGN_SYSTEMS_BY_ID: (slug: string) =>
      `design-libraries/design-systems/${slug}/`,
    COMPONENT_TYPES: "design-libraries/component-types/",
    COMPONENT_TYPES_BY_ID: (slug: string) =>
      `design-libraries/component-types/${slug}/`,
  },
};
