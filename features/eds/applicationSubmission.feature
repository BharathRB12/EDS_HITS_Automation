Feature: Share Ownership Transfer

    Scenario: taxpayer completes Certification
        Given taxpayer login to EDS
        When taxpayer creates a DS2 application
        When taxpayer completes General Information
        When taxpayer completes First Party Information
        When taxpayer completes Second Party Information
        When taxpayer completes Instruction Letter Information
        When taxpayer completes Joint Stock Company Information
        When taxpayer completes Remission Information
        When taxpayer uploads required attachments
        When taxpayer completes Certification
        When taxpayer submits the application
        Then SRN number should be generated


        