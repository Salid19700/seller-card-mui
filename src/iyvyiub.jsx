{ 
    "languages":[ 
    
        { 
        "code": "aaa", 
        "lang": "english" 
        }, 
        { 
        "code": "aab", 
        "lang": "Swedish" 
        }, 
      ] 
    }
    
    
    -------------------------------------------------
    
    import React, { useState } from 'react';
    
    const ParentComponent = () => {
        const [language, setLanguage] = useState('');
    
        const handleLanguage = (langValue) => {
            setLanguage(langValue);
        };
    
        return (
            <div className="col-sm-9">
                <i class="icon-flag"></i>
                <SelectLanguage onSelectLanguage={handleLanguage} />
            </div>
        );
    };
    
    export default ParentComponent;
    
    
    -------------------------------------------------------------------------------------------
    
    import React, { useState, useRef } from 'react';
    
    export const SelectLanguage = ({ onSelectLanguage }) => {
        const [selectedCode, setSelectedCode] = useState('');
        const [selectedLanguage, setSelectedLanguage] = useState(jsonArray[0]);
        const dropdownRef = useRef();
    
        const handleLangChange = () => {
            const lang = dropdownRef.current.value;
            onSelectLanguage(lang);
        };
    
        return (
            <div>
                <DropdownList
                    ref={dropdownRef}
                    data={jsonArray}
                    valueField='lang'
                    textField='lang'
                    caseSensitive={false}
                    minLength={3}
                    filter='contains'
                    onChange={handleLangChange}
                />
            </div>
        );
    };