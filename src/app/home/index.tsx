import { View, Text, TextInput, Touchable, TouchableOpacity, FlatList, Alert } from "react-native";
import React, { useState } from 'react';
import { styles } from './styles';

import { Participant } from '../../components/Participant'

export default function Home() {
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('');

    function handleParticipanAdd() {
        if (participants.includes(participantName)) {
            return Alert.alert('Participante existente', 'Já exite um participante na lista')
        }

        setParticipants(prevState => [...prevState, participantName]);
        setParticipantName('');

    }

    function handleParticipanRemove(name: string) {
        Alert.alert('Remover', `Remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]);
    }

    return (
        <View style={styles.conteiner}>
            <Text style={styles.eventCity}>
                Manaus AM
            </Text>

            <Text style={styles.eventDate}>
                Segunda, 04 de Março de 2024
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Insira algo ai"
                    placeholderTextColor="#6B6B6B"
                    onChangeText={setParticipantName}
                    value={participantName}
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipanAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipanRemove(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <Text style={styles.listEmptyText}>
                        Ainda não há nenhum integrante na lista, adicione alguem ^-^
                    </Text>
                }
            />
        </View>
    );
}