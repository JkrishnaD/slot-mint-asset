# Slot Mint Assets

This repository contains assets for the Slot Mint project.

## Structure

- `images/`: Contains the booking template image
  - `booking-template.png`: Default template for booking NFTs

- `metadata/`: Contains JSON metadata files for each booking
  - Files are named in the format: `{title}_{start_time}_{end_time}.json`
  - Example: `coffee_chat_1234567890_1234567890.json`

## Metadata Format

Each metadata file follows this structure:
```json
{
    "name": "Experience Title",
    "symbol": "BOOK",
    "image": "https://raw.githubusercontent.com/JkrishnaD/slot-mint-asset/main/images/booking-template.png",
    "attributes": [
        {
            "trait_type": "Start",
            "value": 1234567890
        },
        {
            "trait_type": "End",
            "value": 1234567890
        }
    ]
}
```

## Usage

1. Create a new metadata file in the `metadata/` directory for each booking
2. Name the file using the format: `{title}_{start_time}_{end_time}.json`
3. Update the attributes with the correct start and end times
4. Commit and push the changes to make them available to the contract