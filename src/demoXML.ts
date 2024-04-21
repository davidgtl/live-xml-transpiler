// pass-regex_patterns_can_be_used_1_3.ids
export const demoXML = `<?xml version="1.0" encoding="utf-8"?>
<ids xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://standards.buildingsmart.org/IDS http://standards.buildingsmart.org/IDS/0.9.7/ids.xsd" xmlns="http://standards.buildingsmart.org/IDS">
  <info>
    <title>Regex patterns can be used 1/3</title>
    <description>Generated via code automation in the Ids Repository on github.</description>
  </info>
  <specifications>
    <specification name="Regex patterns can be used 1/3" ifcVersion="IFC2X3 IFC4">
      <applicability maxOccurs="unbounded">
        <entity>
          <name>
            <simpleValue>IFCWALL</simpleValue>
          </name>
        </entity>
      </applicability>
      <requirements>
        <attribute>
          <name>
            <simpleValue>Name</simpleValue>
          </name>
          <value>
            <xs:restriction base="xs:string">
              <xs:pattern value="[A-Z]{2}[0-9]{2}" />
            </xs:restriction>
          </value>
        </attribute>
      </requirements>
    </specification>
  </specifications>
</ids>`;
