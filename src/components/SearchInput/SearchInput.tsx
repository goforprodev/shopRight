import React, { useEffect } from 'react';
import { IonSearchbar } from '@ionic/react';
import "./SearchInput.css"
import { useHistory } from 'react-router-dom';

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}


const SearchInput: React.FC<SearchInputProps> = ({onSearch}) => {
  const [searchText, setSearchText] = React.useState<string>('');
  const history = useHistory();

  const handleInputChange = (event: CustomEvent) => {
    const newText = event.detail.value || null;
    setSearchText(newText);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  if(!searchText) return;
    onSearch(searchText);
    setSearchText('');
    history.push(`/search`);
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
      <IonSearchbar className="search-input" placeholder="Search" value={searchText} onIonChange={handleInputChange}  />
      </form>
    </div>
  );
};

export default SearchInput;
