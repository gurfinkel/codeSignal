#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub commonCharacterCount {
    my ($s1, $s2) = @_;

    my $result = 0;
    my %store;
    my @s1Store = split('', $s1);
    my @s2Store = split('', $s2);

    foreach my $item (@s1Store) {
        if ($store{$item}) {
            ++$store{$item};
        } else {
            $store{$item} = 1;
        }
    }

    foreach my $item (@s2Store) {
        if ($store{$item}) {
            ++$result;
            --$store{$item};
        }
    }

    return $result;
}
